import type { ReactNode } from "react";
import type { TextStyle, ViewStyle } from "react-native";

export interface InputGroupProps {
  children: ReactNode;
  label?: string;
  required?: boolean;
  message?: string;
  style?:
    | {
        container?: ViewStyle;
        label?: TextStyle;
        message?: TextStyle;
      }
    | TextStyle;
  containerStyle?: ViewStyle;
  messageStyle?: TextStyle;
  contextValue?: any;
  for?: string;
}
