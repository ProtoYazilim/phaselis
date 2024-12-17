// @ts-nocheck
import { useMemo } from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import {
  ExtractVariantNames,
  ReactNativeStyleSheet,
  StyleSheetWithSuperPowers,
} from "react-native-unistyles/lib/typescript/src/types";
import { StyleSheet } from "react-native";
import { merge, mergeWith, isObject } from "lodash";

type ParsedStylesheet<ST extends StyleSheetWithSuperPowers> = {
  defaultStyles: ReactNativeStyleSheet<ST>;
  themeStyles: ReactNativeStyleSheet<ST>;
  propStyle: ReactNativeStyleSheet<ST>;
  getCombinedStyle: (section: keyof ST) => any[] | any;
  getFlattenStyle: (section: keyof ST) => any[] | any;
};

const useCombinedStyle = <ST extends StyleSheetWithSuperPowers>(
  stylesheet: ST,
  style: any,
  contextThemeStyles: any,
  variation?: any,
  variantsMap?: ExtractVariantNames<typeof stylesheet>,
): ParsedStylesheet<ST> => {
  const { styles: defaultStyles } = useStyles(stylesheet, variantsMap);

  const { styles: themeStyles } = useStyles(
    mergeStyles(
      contextThemeStyles?.default || contextThemeStyles,
      contextThemeStyles[variation],
    ),
    variantsMap,
  );

  console.log("themeStyles", themeStyles.text);

  const { styles: propStyle } = useStyles(createStyleSheet(style), variantsMap);

  const getCombinedStyle = useMemo(
    () =>
      (section: keyof ST): any[] => {
        const dStyles = defaultStyles[section];
        const dExtraStyles =
          defaultStyles?.extraStyles?.[section]?.(variantsMap);
        const tStyles = themeStyles[section];
        const tExtraStyles = themeStyles?.extraStyles?.[section]?.(variantsMap);
        let pStyles = propStyle?.[section];
        return [
          { ...dStyles, ...dExtraStyles },
          { ...tStyles, ...tExtraStyles },
          { ...pStyles },
        ];
      },
    [defaultStyles, variantsMap, themeStyles, style],
  );

  const getFlattenStyle = useMemo(
    () =>
      (section: keyof ST): any[] => {
        const dStyles = defaultStyles[section];
        const dExtraStyles =
          defaultStyles?.extraStyles?.[section]?.(variantsMap);
        const tStyles = themeStyles[section];
        const tExtraStyles = themeStyles?.extraStyles?.[section]?.(variantsMap);
        let pStyles = propStyle?.[section];
        return StyleSheet.flatten([
          { ...dStyles, ...dExtraStyles },
          { ...tStyles, ...tExtraStyles },
          { ...pStyles },
        ]);
      },
    [defaultStyles, variantsMap, themeStyles, style],
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

function mergeStyles(obj1, obj2) {
  const merged = mergeWith({}, obj1, obj2, (objValue, srcValue) => {
    if (isObject(objValue) && isObject(srcValue)) {
      return merge({}, objValue, srcValue);
    }
    return srcValue !== undefined ? srcValue : objValue;
  });

  return sortValues(merged);
}

function sortValues(obj) {
  const entries = Object.entries(obj);
  entries.sort(([, a], [, b]) => {
    const isAObject = isObject(a);
    const isBObject = isObject(b);

    if (isAObject === isBObject) return 0;
    return isAObject ? 1 : -1;
  });

  const sortedObj = {};
  for (const [key, value] of entries) {
    sortedObj[key] = isObject(value) ? sortValues(value) : value;
  }
  return sortedObj;
}
