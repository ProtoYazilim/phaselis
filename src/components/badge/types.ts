import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";

export interface BadgeProps {
  text: string;
  children: ReactNode;
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
  variation?: any;
  size?: any;
}
