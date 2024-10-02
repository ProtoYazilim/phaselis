import { ReactNode } from "react";
import { ViewStyle } from "react-native";

interface InputGroupProps {
  children: ReactNode;
  label: string;
  required?: boolean;
  message?: string;
  style?: {
    container?: ViewStyle;
  };
}

export default InputGroupProps;
