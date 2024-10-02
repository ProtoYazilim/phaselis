import { ViewStyle } from "react-native";
import { IFormPropTypes } from "@phaselis/types";

interface RadioGroupProps extends IFormPropTypes {
  style?: any;
  onChange?: (event: any, value: any) => void;
}

interface RadioProps {
  text?: string;
  value: string;
  onChange?: (value: any) => void;
  disabled?: boolean;
  width?: number;
  height?: number;
  size?: "sm" | "md" | "lg";
  contextValue?: any;
  style?: {
    container?: ViewStyle;
    outerElement?: ViewStyle;
    innerElement?: ViewStyle;
    text?: ViewStyle;
  };
}

export { RadioGroupProps, RadioProps };
