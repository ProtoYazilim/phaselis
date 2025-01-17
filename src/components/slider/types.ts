import { FC, ReactNode } from "react";
import { ViewStyle } from "react-native";
import { ComponentSize, InputControlProps } from "../../types";

interface SliderProps
  extends Omit<InputControlProps<number, any, any>, "error">,
    SliderExtraProps {
  contextValue?: any;
  disabled?: boolean;
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
}

export { SliderProps };
