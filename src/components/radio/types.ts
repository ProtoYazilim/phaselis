import { TextStyle, ViewStyle } from "react-native";
import { FC, ReactNode } from "react";
import { InputControlProps } from "src/types";

interface RadioGroupProps
  extends InputControlProps<string, any, any>,
    RadioGroupExtraProps {
  children?: ReactNode | FC | any | Element;
  disabled?: boolean;
  contextValue?: any;
  style?: {
    group?: ViewStyle;
  };
  id?: string; //not used but maybe used
  className?: string; //not used but maybe used
}

interface RadioProps extends RadioExtraProps {
  text?: string;
  value: string;
  onChange?: (value: string) => void;
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
