import { TextStyle, ViewStyle } from "react-native";
import { SlotableLeftRightProps, ComponentSize } from "@phaselis/types";
import { FC, ReactNode } from "react";

interface DatepickerProps extends SlotableLeftRightProps {
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
  onChange?: (event: any, value: any, ...args: any[]) => void;
  id?: string; //not used but maybe used in future
  children?: ReactNode | FC | any | Element; //not used but maybe used in future
  className?: string; //not used but maybe used in future
  name?: string; //not used but maybe used in future
  value?: any; //not used but maybe used in future
  partofform?: boolean; //not used but maybe used in future
  validations?: Function[]; //not used but maybe used in future
  onBlur?: (event: any, value: any, ...args: any[]) => void; //not used but maybe used in future
  resetValue?: any; //not used but maybe used in future
  isChanged?: any; //not
  isUsed?: any; //not
  error?: any; //not
}

export { DatepickerProps };
