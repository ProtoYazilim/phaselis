import type { UnistylesValues } from "react-native-unistyles";
import { lightTheme } from "./lightTheme";
import { LightColors } from "./LightColors";
import { Spacings } from "./spacings";
import type { TextStyle, ViewStyle } from "react-native";
import type { Shadows } from "./effects";

export type StyleSheet = {
  [styleName: string]: UnistylesValues | ((...args: any) => UnistylesValues);
};

export type PhaselisTheme = typeof lightTheme;
export type PhaselisColors = typeof LightColors;
export type PhaselisSpacings = typeof Spacings;
export type PhaselisShadows = typeof Shadows;

export interface PhaselisComponentTheme {
  [component: string]: ComponentTheme;
}

interface ComponentTheme {
  [variant: string]: VariantTheme | ViewStyle | TextStyle;
}

interface VariantTheme {
  [element: string]: ElementTheme | ViewStyle | TextStyle;
}

interface ElementTheme {
  [property: string]:
    | string
    | number
    | VariantOptions
    | undefined
    | ViewStyle
    | TextStyle;
}

interface VariantOptions {
  [variant: string]: ElementTheme;
}
