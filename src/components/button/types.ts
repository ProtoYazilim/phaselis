import {
  GestureResponderEvent,
  PressableProps,
  TextStyle,
  ViewStyle,
} from "react-native";
import { SlotIconName, SlotChildComponent } from "@phaselis/types";
import { ReactNode } from "react";

export interface ButtonPropTypes extends Omit<PressableProps, "style"> {
  id?: string;
  children?: ReactNode | any | Element;
  disabled?: boolean;
  contextValue?: any; // private
  style?: ButtonStyles;
  text?: string;
  onClick?: ((event: GestureResponderEvent) => void) | null | undefined;
  type?: buttonType;
  full?: boolean; // testing
  loading?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  LeftSlot?: SlotChildComponent;
  RightSlot?: SlotChildComponent;
  leftIcon?: SlotIconName;
  rightIcon?: SlotIconName;
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  tertiary?: boolean;
  variants?: any;
}

export interface ButtonStyles {
  container?: ViewStyle;
  text?: TextStyle;
  leftSlot?: ViewStyle & TextStyle;
  rightSlot?: ViewStyle & TextStyle;
}

type buttonType = "submit" | "reset" | "button";
