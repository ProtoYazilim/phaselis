// @ts-nocheck
import { useMemo, useCallback } from "react";
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
  for (const key in obj2) {
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
  }

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

  for (const key in obj) {
    if (obj[key] && typeof obj[key] === "object") {
      objects[key] = sortValues(obj[key]); // Recursively sort nested objects
    } else {
      primitives[key] = obj[key];
    }
  }

  // Return combined object with primitives first
  return { ...primitives, ...objects };
};

/**
 * Get nested value from an object using path
 */
const getNestedValue = (obj, path, variation) => {
  if (!obj) return { default: {}, variation: {} };

  const parts = path.split(".");

  if (parts.length > 1) {
    const mainComponentName = parts[0];
    const restComponentName = parts.slice(1);

    const defaultPath = [mainComponentName, "default", ...restComponentName];
    const variationPath = [mainComponentName, variation, ...restComponentName];

    const getValueByPath = (obj, pathArray) => {
      let current = obj;
      for (let i = 0; i < pathArray.length; i++) {
        if (!current) return undefined;
        current = current[pathArray[i]];
      }
      return current;
    };

    return {
      default: getValueByPath(obj, defaultPath),
      variation: getValueByPath(obj, variationPath),
    };
  } else {
    return {
      default: obj?.[path]?.default || obj?.[path] || {},
      variation: obj?.[path]?.[variation],
    };
  }
};

type ParsedStylesheet<ST extends StyleSheetWithSuperPowers> = {
  defaultStyles: ReactNativeStyleSheet<ST>;
  themeStyles: ReactNativeStyleSheet<ST>;
  propStyle: ReactNativeStyleSheet<ST>;
  getCombinedStyle: (section: keyof ST, isDefault?: boolean) => any[] | any;
  getFlattenStyle: (section: keyof ST, isDefault?: boolean) => any[] | any;
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
  const { style = {}, contextValue = {} } = variantsMap || {};

  // Get theme styles for component (default and variation-specific)
  const contextThemeStyles = useMemo(
    () => getNestedValue(contextValue?.theme, componentName, variation || ""),
    [contextValue?.theme, componentName, variation],
  );

  // Default component styles
  const { styles: defaultStyles } = useStyles(stylesheet, variantsMap);

  // Calculate merged theme styles once
  const mergedThemeStyles = useMemo(() => {
    const baseTheme = contextThemeStyles?.default || {};
    const variationTheme = contextThemeStyles?.variation || {};
    return mergeStyles(baseTheme, variationTheme);
  }, [contextThemeStyles]);

  // Apply theme styles - memoized to prevent unnecessary recalculations
  const { styles: themeStyles } = useStyles(mergedThemeStyles, variantsMap);

  // Apply prop-based styles - memoized creation of stylesheets
  const propStyleSheet = useMemo(() => createStyleSheet(style || {}), [style]);
  const { styles: propStyle } = useStyles(propStyleSheet, variantsMap);

  // This is only used by getCombinedStyle for the isDefault case
  const sectionStyleSheet = useMemo(
    () => createStyleSheet({ style: style || {} }),
    [style],
  );
  const { styles: sectionStyle } = useStyles(sectionStyleSheet, variantsMap);

  // Efficiently calculate combined styles
  const getCombinedStyle = useCallback(
    (section: keyof ST, isDefault = false): any[] => {
      const dStyles = defaultStyles[section];
      const dExtraStyles = defaultStyles?.extraStyles?.[section]?.(variantsMap);

      const tStyles = themeStyles[section];

      const tExtraStyles =
        contextThemeStyles?.[variation]?.extraStyles?.[section]?.(variantsMap);

      const pStyles = variantsMap?.[`${section}Style`];

      const sStyles = isDefault
        ? propStyle?.[section]
          ? propStyle?.[section]
          : { ...sectionStyle.style }
        : { ...variantsMap?.[`${section}Style`], ...propStyle?.[section] };

      return [
        { ...dStyles, ...dExtraStyles },
        { ...tStyles, ...tExtraStyles },
        sStyles,
        pStyles,
      ];
    },
    [
      defaultStyles,
      themeStyles,
      contextThemeStyles,
      variation,
      variantsMap,
      propStyle,
      sectionStyle.style,
    ],
  );

  // Get flattened styles for direct application
  const getFlattenStyle = useCallback(
    (section: keyof ST, isDefault = false): any => {
      // Extract all applicable styles
      const dStyles = defaultStyles[section];
      const dExtraStyles = defaultStyles?.extraStyles?.[section]?.(variantsMap);
      const tStyles = themeStyles[section];
      const tExtraStyles = themeStyles?.extraStyles?.[section]?.(variantsMap);
      const pStyles = propStyle?.[section];
      const sStyles = isDefault
        ? { ...sectionStyle.style, ...propStyle?.[section] }
        : { ...variantsMap?.[`${section}Style`], ...propStyle?.[section] };

      return StyleSheet.flatten([
        { ...dStyles, ...dExtraStyles },
        { ...tStyles, ...tExtraStyles },
        pStyles || {}, // Ensure we don't pass undefined
        sStyles,
      ]);
    },
    [defaultStyles, themeStyles, propStyle, sectionStyle, variantsMap],
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
