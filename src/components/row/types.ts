import type { ViewStyle } from "react-native";
import type { FC, ReactNode } from "react";

export interface RowProps {
  id?: string;
  children?: ReactNode | FC | any | Element;
  disabled?: boolean;
  // className?: string;
  // name?: string;
  contextValue?: any;
  style?: ViewStyle;
}
