import type { ReactNode } from "react";
import type { ViewProps, ViewStyle } from "react-native";
import type { UnistylesValues } from "react-native-unistyles";
import type { LinearGradientAttributes, ShadowAttributes } from "../../types";

interface ExtendedViewStyle extends ViewStyle {
  background?: string[] | string;
  shadows?: ShadowAttributes[];
  linearGradient?: LinearGradientAttributes;
}

export interface BlockStyles {
  container?: UnistylesValues;
}

interface BlockProps extends Omit<ViewProps, "style"> {
  children?: ReactNode;
  contextValue?: any;
  style?: BlockStyles | ExtendedViewStyle;
  animated?: boolean;
}

export type { BlockProps, ExtendedViewStyle };
