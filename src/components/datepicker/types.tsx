import { TextStyle, ViewStyle } from "react-native";
import { FC, ReactNode } from "react";
import {
  ComponentSize,
  InputControlProps,
  SlotableLeftRightProps,
} from "src/types";

interface DatepickerProps
  extends SlotableLeftRightProps,
    InputControlProps<Date, any, any> {
  contextValue?: any;
  mode?: "date" | "time" | "datetime";
  minDate?: Date;
  maxDate?: Date;
  format?: string;
  size?: ComponentSize;
  style?: {
    container?: ViewStyle;
    leftSlot?: ViewStyle;
    element?: TextStyle;
  };
  locale?: string; //locale type example > TR_tr
  disabled?: boolean;
  id?: string; //not used but maybe used in future
  children?: ReactNode | FC | any | Element; //not used but maybe used in future
  className?: string; //not used but maybe used in future
}

export { DatepickerProps };
