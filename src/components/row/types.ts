import type { ViewStyle } from "react-native";
import type { UnistylesValues } from "react-native-unistyles";
import type { FC, ReactNode } from "react";

export interface RowStyles {
  container?: UnistylesValues;
}

export interface RowProps extends RowExtraProps {
  id?: string;
  children?: ReactNode | FC | any | Element;
  disabled?: boolean;
  // className?: string;
  // name?: string;
  contextValue?: any;
  style?: RowStyles | ViewStyle;
}
