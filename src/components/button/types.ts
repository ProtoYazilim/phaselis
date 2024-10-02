import {
  GestureResponderEvent,
  PressableProps,
  TextStyle,
  ViewStyle,
} from "react-native";
import { SlotIconName, SlotChildComponent } from "@phaselis/types";
import { MouseEvent, ReactNode } from "react";

export interface ButtonPropTypes extends Omit<PressableProps, "style"> {
  id?: string;
  children?: ReactNode | any | Element;
  disabled?: boolean;
  className?: string;
  name?: string;
  contextValue?: any;
  style?: ButtonStyles;
  text?: string;
  onClick?: (event: MouseEvent<HTMLElement> | GestureResponderEvent) => void;
  onMouseOver?: (event: MouseEvent<HTMLElement>) => void;
  onMouseOut?: (event: MouseEvent<HTMLElement>) => void;
  autoFocus?: boolean;
  fetchingIcon?: ReactNode;
  custom?: boolean;
  underlayColor?: string;
  type?: buttonType;
  full?: boolean;
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
