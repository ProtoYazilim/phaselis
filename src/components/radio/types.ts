import { TextStyle, ViewStyle } from "react-native";
import { IFormPropTypes } from "@phaselis/types";

interface RadioGroupProps extends IFormPropTypes {
  style?: {
    group?: ViewStyle;
  };
  onChange?: (event: any, value: string) => void;
}

interface RadioProps {
  text?: string;
  value: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  width?: number;
  height?: number;
  size?: "sm" | "md" | "lg";
  contextValue?: any;
  style?: {
    container?: ViewStyle;
    outerElement?: ViewStyle;
    innerElement?: ViewStyle;
    text?: TextStyle;
  };
}

export { RadioGroupProps, RadioProps };
