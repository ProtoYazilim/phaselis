import type { ReactNode } from "react";
import type { TextStyle, ViewStyle } from "react-native";
import type { SlotIconName } from "../../types";

export interface BadgeProps extends BadgeExtraProps {
  text?: string;
  children: ReactNode;
  style?: BadgeStyles | ViewStyle;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  leftIconStyle?: TextStyle;
  rightIconStyle?: TextStyle;
  contextValue?: any;
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
  leftIcon?: SlotIconName;
  rightIcon?: SlotIconName;
}

export interface BadgeStyles {
  container?: ViewStyle;
  text?: TextStyle;
  leftIcon?: TextStyle;
  rightIcon?: TextStyle;
  element?: ViewStyle;
}
