import type { ReactNode } from "react";
import type { TextProps, TextStyle, ViewStyle } from "react-native";
import type { UnistylesValues } from "react-native-unistyles";

export interface LabelProps extends LabelExtraProps, Omit<TextProps, "style"> {
  text?: string;
  style?: LabelStyles | TextStyle | UnistylesValues;
  containerStyle?: ViewStyle | UnistylesValues;
  forId?: string;
  contextValue?: any;
  children?: ReactNode;
}

export interface LabelStyles {
  container?: UnistylesValues;
  text?: UnistylesValues;
}
