import type { ReactNode } from "react";
import type { ViewStyle } from "react-native";

export interface InputGroupProps {
  children: ReactNode;
  label: string;
  required?: boolean;
  message?: string;
  style?: {
    container?: ViewStyle;
  };
}
