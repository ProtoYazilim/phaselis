import {
  GestureResponderEvent,
  PressableProps,
  TextStyle,
  ViewStyle,
} from "react-native";
import { SlotableLeftRightProps, ComponentSize } from "@phaselis/types";
import { ReactNode } from "react";

export interface ButtonPropTypes
  extends SlotableLeftRightProps,
    Omit<PressableProps, "style"> {
  id?: string;
  children?: ReactNode;
  disabled?: boolean;
  contextValue?: any;
  style?: ButtonStyles;
  text?: string;
  onClick?: ((event: GestureResponderEvent) => void) | null | undefined;
  type?: buttonType;
  size?: ComponentSize;
  loading?: boolean;
  variation?: any;
}

export interface ButtonStyles {
  container?: ViewStyle;
  text?: TextStyle;
  leftSlot?: ViewStyle & TextStyle;
  rightSlot?: ViewStyle & TextStyle;
}

type buttonType = "submit" | "reset" | "button";
