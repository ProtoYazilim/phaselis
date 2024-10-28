// @ts-nocheck
import { useMemo } from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import {
  ExtractVariantNames,
  ReactNativeStyleSheet,
  StyleSheetWithSuperPowers,
} from "react-native-unistyles/lib/typescript/src/types";

type ParsedStylesheet<ST extends StyleSheetWithSuperPowers> = {
  defaultStyles: ReactNativeStyleSheet<ST>;
  themeStyles: ReactNativeStyleSheet<ST>;
  propStyle: ReactNativeStyleSheet<ST>;
  getCombinedStyle: (section: keyof ST) => any[] | any;
};

const useCombinedStyle = <ST extends StyleSheetWithSuperPowers>(
  stylesheet: ST,
  style: any,
  contextThemeStyles: any,
  variantsMap: ExtractVariantNames<typeof stylesheet>,
): ParsedStylesheet<ST> => {
  const { styles: defaultStyles } = useStyles(stylesheet, variantsMap);

  const { styles: themeStyles } = useStyles(
    contextThemeStyles as typeof stylesheet,
    variantsMap,
  );

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

  return {
    defaultStyles,
    themeStyles,
    propStyle,
    getCombinedStyle,
  };
};

export default useCombinedStyle;
