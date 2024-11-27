import { ViewStyle } from "react-native";
import { FC, ReactNode } from "react";

interface RowProps {
  id?: string;
  children?: ReactNode | FC | any | Element;
  disabled?: boolean;
  // className?: string;
  // name?: string;
  contextValue?: any;
  style?: ViewStyle;
}

export { RowProps };
