import { UnistylesValues } from "react-native-unistyles";
import { lightTheme } from "./lightTheme";
import { Colors } from "./colors";
import { Spacings } from "./spacings";

export type StyleSheet = {
  [styleName: string]: UnistylesValues | ((...args: any) => UnistylesValues);
};

export type PhaselisTheme = typeof lightTheme;
export type PhaselisColors = typeof Colors;
export type PhaselisSpacings = typeof Spacings;
