import { ReactNode } from "react";
import { ViewProps, ViewStyle } from "react-native";
import { LinearGradientAttributes, ShadowAttributes } from "../../types";

interface ExtendedViewStyle extends ViewStyle {
  background?: string[] | string;
  shadows?: ShadowAttributes[];
  lineerGradient?: LinearGradientAttributes;
}

interface BlockProps extends ViewProps {
  children?: ReactNode;
  contextValue?: any;
  style?: ExtendedViewStyle;
}

export { BlockProps };
