import { IFormPropTypes } from "@phaselis/types";
import { ViewStyle } from "react-native";

interface SliderProps extends IFormPropTypes {
  value?: number | string;
  onChange?: (event: any, value: string | number) => void;
  style?: {
    container?: ViewStyle;
    element?: ViewStyle;
  };
  size?: any;
  minValue?: number;
  maxValue?: number;
  step?: number;
  tapToSeek?: boolean;
  inverted?: boolean;
  renderStepNumber?: boolean;
}

export { SliderProps };
