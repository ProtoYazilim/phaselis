import type { FC, ReactNode } from "react";
import type { ViewStyle } from "react-native";
import type { InputControlProps } from "../../types";

export interface SliderProps
  extends Omit<InputControlProps<number, any, any>, "error">,
    SliderExtraProps {
  contextValue?: any;
  disabled?: boolean;
  style?: {
    container?: ViewStyle;
    element?: ViewStyle;
  };
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
