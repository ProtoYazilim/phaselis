import { TextStyle, ViewStyle } from "react-native";
import { ComponentSize, InputControlProps } from "@phaselis/types";
import { FC, ReactNode } from "react";

interface RadioGroupProps extends InputControlProps<string, any, any> {
  children?: ReactNode | FC | any | Element;
  disabled?: boolean;
  contextValue?: any;
  style?: {
    group?: ViewStyle;
  };
  id?: string; //not used but maybe used
  className?: string; //not used but maybe used
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
  variation?: any;
}

export { RadioGroupProps, RadioProps };
