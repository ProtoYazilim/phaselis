import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { LabelExtraProps } from "@/global.d";

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
  // variation?: any;
}
