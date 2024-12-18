import { SlotIconName } from "@phaselis/types";
import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";

export interface BadgeProps {
  text?: string;
  children: ReactNode;
  style?: {
    container?: ViewStyle;
    element?: ViewStyle;
    text?: TextStyle;
    leftIcon?: TextStyle;
    rightIcon?: TextStyle;
  };
  contextValue?: any;
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
  leftIcon?: SlotIconName;
  rightIcon?: SlotIconName;
}
