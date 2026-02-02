import type { ReactNode } from "react";
import type { TextStyle, ViewStyle } from "react-native";
import type { UnistylesValues } from "react-native-unistyles";

export interface LabelProps extends LabelExtraProps {
  text?: string;
  style?: LabelStyles | TextStyle;
  containerStyle?: ViewStyle;
  forId?: string;
  adjustsFontSizeToFit?: boolean;
  numberOfLines?: number;
  minimumFontScale?: number;
  contextValue?: any;
  children?: ReactNode;
}

export interface LabelStyles {
  container?: UnistylesValues;
  text?: UnistylesValues;
}
