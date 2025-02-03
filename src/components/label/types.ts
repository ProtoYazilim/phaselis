import type { ReactNode } from "react";
import type { TextStyle, ViewStyle } from "react-native";

export interface LabelProps extends LabelExtraProps {
  text?: string;
  style?: {
    container?: ViewStyle;
    text?: TextStyle;
  };
  forId?: string;
  adjustsFontSizeToFit?: boolean;
  numberOfLines?: number;
  minimumFontScale?: number;
  contextValue?: any;
  children?: ReactNode;
}
