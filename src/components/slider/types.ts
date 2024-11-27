import { ComponentSize } from "@phaselis/types";
import { FC, ReactNode } from "react";
import { ViewStyle } from "react-native";

interface SliderProps {
  error?: any; //not
  contextValue?: any;
  disabled?: boolean;
  value?: number | string;
  onChange?: (event: any, value: string | number) => void;
  style?: {
    container?: ViewStyle;
    element?: ViewStyle;
  };
  size?: ComponentSize;
  minValue?: number;
  maxValue?: number;
  step?: number;
  tapToSeek?: boolean;
  inverted?: boolean;
  renderStepNumber?: boolean;
  id?: string; //not used but maybe in the future
  children?: ReactNode | FC | any | Element; //not used but maybe in the future
  className?: string; //not used but maybe in the future
  name?: string; //not used but maybe in the future
  partofform?: boolean; //not used but maybe in the future
  validations?: Function[]; //not used but maybe in the future
  isChanged?: any; //not
  isUsed?: any; //not
  onBlur?: (event: any, value: any, ...args: any[]) => void; //not used but maybe in the future
  resetValue?: any; //not used but maybe in the future
}

export { SliderProps };
