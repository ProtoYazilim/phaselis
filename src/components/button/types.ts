import type {
  GestureResponderEvent,
  PressableProps,
  TextStyle,
  ViewStyle,
} from "react-native";
import type { ReactNode } from "react";
import type { SlotableLeftRightProps } from "../../types";
import type { UnistylesValues } from "react-native-unistyles/lib/typescript/src/types";

export interface ButtonPropTypes
  extends
    SlotableLeftRightProps,
    Omit<PressableProps, "style">,
    ButtonExtraProps {
  id?: string;
  children?: ReactNode;
  disabled?: boolean;
  contextValue?: any;
  style?: ButtonStyles | ViewStyle;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  leftSlotStyle?: ViewStyle & TextStyle;
  rightSlotStyle?: ViewStyle & TextStyle;
  text?: string;
  onClick?: ((event: GestureResponderEvent) => void) | null | undefined;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
  type?: ButtonType;
  pressed?: boolean;
}

export interface ButtonStyles {
  container?: UnistylesValues;
  text?: UnistylesValues;
  leftSlot?: UnistylesValues;
  rightSlot?: UnistylesValues;
  element?: UnistylesValues;
}

type ButtonType = "submit" | "reset" | "button";

export type { ButtonType };
