// @ts-nocheck
import { useMemo } from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import {
  ExtractVariantNames,
  ReactNativeStyleSheet,
  StyleSheetWithSuperPowers,
} from "react-native-unistyles/lib/typescript/src/types";
import { StyleSheet } from "react-native";

/**
 * Efficiently merges style objects with proper handling of nested objects
 */
const mergeStyles = (obj1, obj2) => {
  if (!obj1) return obj2 || {};
  if (!obj2) return obj1 || {};

  // Create a new object to avoid mutating inputs
  const result = { ...obj1 };

  // Process all keys from obj2
  Object.keys(obj2).forEach((key) => {
    // If both values are objects, merge them recursively
    if (
      obj1[key] &&
      typeof obj1[key] === "object" &&
      obj2[key] &&
      typeof obj2[key] === "object"
    ) {
      result[key] = mergeStyles(obj1[key], obj2[key]);
    }
    // Otherwise take obj2's value (or keep obj1's if obj2 doesn't have it)
    else if (obj2[key] !== undefined) {
      result[key] = obj2[key];
    }
  });

  return sortValues(result);
};

/**
 * Sorts object properties to keep primitives first, then objects
 */
const sortValues = (obj) => {
  // Early return for non-objects or null
  if (!obj || typeof obj !== "object") return obj;

  // Group primitive and object values
  const primitives = {};
  const objects = {};

  Object.entries(obj).forEach(([key, value]) => {
    if (value && typeof value === "object") {
      objects[key] = sortValues(value); // Recursively sort nested objects
    } else {
      primitives[key] = value;
    }
  });

  // Return combined object with primitives first
  return { ...primitives, ...objects };
};

type ParsedStylesheet<ST extends StyleSheetWithSuperPowers> = {
  defaultStyles: ReactNativeStyleSheet<ST>;
  themeStyles: ReactNativeStyleSheet<ST>;
  propStyle: ReactNativeStyleSheet<ST>;
  getCombinedStyle: (section: keyof ST, isDefault?: boolean) => any[] | any;
  getFlattenStyle: (section: keyof ST) => any[] | any;
};

/**
 * Custom hook that combines styles from different sources with proper precedence
 */
const useCombinedStyle = <ST extends StyleSheetWithSuperPowers>(
  stylesheet: ST,
  componentName: string,
  variation?: string,
  variantsMap?: ExtractVariantNames<typeof stylesheet>,
): ParsedStylesheet<ST> => {
  const { style, contextValue } = variantsMap || {
    style: {},
    contextValue: {},
  };

  // Get theme styles for component (default and variation-specific)
  const contextThemeStyles = contextValue?.theme?.[componentName];

  // Default component styles
  const { styles: defaultStyles } = useStyles(stylesheet, variantsMap);

  // Calculate merged theme styles once
  const mergedThemeStyles = useMemo(() => {
    const baseTheme = contextThemeStyles?.default || contextThemeStyles || {};
    const variationTheme = contextThemeStyles?.[variation] || {};
    return mergeStyles(baseTheme, variationTheme);
  }, [contextThemeStyles, variation]);

  // Apply theme styles
  const { styles: themeStyles } = useStyles(mergedThemeStyles, variantsMap);

  // Apply prop-based styles
  const { styles: propStyle } = useStyles(
    createStyleSheet(style || {}),
    variantsMap,
  );

  // This is only used by getCombinedStyle for the isDefault case
  const { styles: sectionStyle } = useStyles(
    createStyleSheet({ style: style || {} }),
    variantsMap,
  );

  // Efficiently calculate combined styles
  const getCombinedStyle = useMemo(
    () =>
      (section: keyof ST, isDefault = false): any[] => {
        const dStyles = defaultStyles[section];
        const tStyles = themeStyles[section];
        const pStyles = variantsMap?.[`${section}Style`];

        // Calculate section-specific styles based on isDefault flag
        const sStyles = isDefault
          ? { ...sectionStyle.style, ...propStyle?.[section] }
          : { ...variantsMap?.[`${section}Style`], ...propStyle?.[section] };

        return [dStyles, tStyles, sStyles, pStyles];
      },
    [defaultStyles, themeStyles, propStyle, sectionStyle, variantsMap],
  );

  // Get flattened styles for direct application
  const getFlattenStyle = useMemo(
    () =>
      (section: keyof ST): any => {
        // Extract all applicable styles
        const dStyles = defaultStyles[section];
        const dExtraStyles =
          defaultStyles?.extraStyles?.[section]?.(variantsMap);
        const tStyles = themeStyles[section];
        const tExtraStyles = themeStyles?.extraStyles?.[section]?.(variantsMap);
        const pStyles = propStyle?.[section];

        // Flatten into a single style object
        return StyleSheet.flatten([
          { ...dStyles, ...dExtraStyles },
          { ...tStyles, ...tExtraStyles },
          pStyles || {}, // Ensure we don't pass undefined
        ]);
      },
    [defaultStyles, themeStyles, propStyle, variantsMap],
  );

  return {
    defaultStyles,
    themeStyles,
    propStyle,
    getCombinedStyle,
    getFlattenStyle,
  };
};

export default useCombinedStyle;
