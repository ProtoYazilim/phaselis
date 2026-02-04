import type { ReactNode } from "react";
import type { TextStyle, ViewStyle } from "react-native";
import type { UnistylesValues } from "react-native-unistyles";

export interface InputGroupStyles {
  container?: UnistylesValues;
  label?: UnistylesValues;
  message?: UnistylesValues;
}

export interface InputGroupProps {
  children: ReactNode;
  label?: string;
  required?: boolean;
  message?: string;
  style?: InputGroupStyles | TextStyle;
  containerStyle?: ViewStyle;
  messageStyle?: TextStyle;
  contextValue?: any;
  for?: string;
}
