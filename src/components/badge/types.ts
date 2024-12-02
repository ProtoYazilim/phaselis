import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";

export interface BadgeProps {
  text: string;
  children: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  outline?: boolean;
  style?: {
    container?: ViewStyle;
    element?: ViewStyle;
    text?: TextStyle;
  };
  contextValue?: any;
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
}
