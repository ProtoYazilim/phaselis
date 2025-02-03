import type {
  GestureResponderEvent,
  PressableProps,
  TextStyle,
  ViewStyle,
} from "react-native";
import type { ReactNode } from "react";
import type { SlotableLeftRightProps } from "../../types";

export interface ButtonPropTypes
  extends SlotableLeftRightProps,
    Omit<PressableProps, "style">,
    ButtonExtraProps {
  id?: string;
  children?: ReactNode;
  disabled?: boolean;
  contextValue?: any;
  style?: ButtonStyles;
  text?: string;
  onClick?: ((event: GestureResponderEvent) => void) | null | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  type?: buttonType;
}

export interface ButtonStyles {
  container?: ViewStyle;
  text?: TextStyle;
  leftSlot?: ViewStyle & TextStyle;
  rightSlot?: ViewStyle & TextStyle;
}

type buttonType = "submit" | "reset" | "button";
