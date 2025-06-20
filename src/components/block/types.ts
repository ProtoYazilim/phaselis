import type { ReactNode } from "react";
import type { ViewProps, ViewStyle } from "react-native";
import type { LinearGradientAttributes, ShadowAttributes } from "../../types";

interface ExtendedViewStyle extends ViewStyle {
  background?: string[] | string;
  shadows?: ShadowAttributes[];
  linearGradient?: LinearGradientAttributes;
}

interface BlockProps extends ViewProps {
  children?: ReactNode;
  contextValue?: any;
  style?: ExtendedViewStyle;
  animated?: boolean;
}

export type { BlockProps, ExtendedViewStyle };
