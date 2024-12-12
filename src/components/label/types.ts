import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";

export interface LabelProps {
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
  variation?: any;
}
