import { TextStyle, ViewStyle } from "react-native";
import { ComponentSize, IFormPropTypes } from "@phaselis/types";

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
  size?: ComponentSize;
  contextValue?: any;
  style?: {
    container?: ViewStyle;
    outerElement?: ViewStyle;
    innerElement?: ViewStyle;
    text?: TextStyle;
  };
  partOfGroup?: boolean;
  checked?: boolean;
}

export { RadioGroupProps, RadioProps };
