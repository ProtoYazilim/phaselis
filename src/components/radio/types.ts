import { TextStyle, ViewStyle } from "react-native";
import { ComponentSize } from "@phaselis/types";
import { FC, ReactNode } from "react";

interface RadioGroupProps {
  //Kullanilan
  children?: ReactNode | FC | any | Element;
  disabled?: boolean;
  contextValue?: any;
  value?: any;
  style?: {
    group?: ViewStyle;
  };
  onChange?: (event: any, value: string) => void;
  id?: string; //not used but maybe used
  className?: string; //not used but maybe used
  name?: string; //not used but maybe used
  partofform?: boolean; //not used but maybe used
  validations?: Function[]; //not used but maybe used
  isChanged?: any; //not
  isUsed?: any; //not
  error?: any; //not
  onBlur?: (event: any, value: any, ...args: any[]) => void; //not used but maybe used
  resetValue?: any; //not used but maybe used
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
