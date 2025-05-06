import type { TextStyle, ViewStyle } from "react-native";
import type { FC, ReactNode } from "react";
import type {
  ComponentSize,
  IconStyle,
  InputControlProps,
  SlotableLeftRightProps,
} from "../../types";

export interface DatepickerProps
  extends SlotableLeftRightProps,
    Omit<DatepickerExtraProps, "error">,
    InputControlProps<Date, any, any> {
  contextValue?: any;
  mode?: "date" | "time" | "datetime";
  minDate?: Date;
  maxDate?: Date;
  format?: string;
  size?: ComponentSize;
  style?:
    | {
        container?: ViewStyle;
        leftSlot?: IconStyle | ViewStyle;
        rightSlot?: IconStyle | ViewStyle;
        element?: TextStyle;
      }
    | TextStyle;
  containerStyle?: ViewStyle;
  leftSlotStyle?: IconStyle | ViewStyle;
  rightSlotStyle?: IconStyle | ViewStyle;
  rightIconVisible?: boolean;
  theme?: "light" | "dark" | "auto";
  locale?: string; //locale type example > TR_tr
  disabled?: boolean;
  id?: string; //not used but maybe used in future
  children?: ReactNode | FC | any | Element; //not used but maybe used in future
  className?: string; //not used but maybe used in future
}
