import type { UnistylesValues } from "react-native-unistyles";
import { lightTheme } from "./lightTheme";
import { LightColors } from "./LightColors";
import { Spacings } from "./spacings";

export type StyleSheet = {
  [styleName: string]: UnistylesValues | ((...args: any) => UnistylesValues);
};

export type PhaselisTheme = typeof lightTheme;
export type PhaselisColors = typeof LightColors;
export type PhaselisSpacings = typeof Spacings;
