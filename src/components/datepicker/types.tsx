import { TextStyle, ViewStyle } from "react-native";
import { IFormPropTypes, SlotableLeftRightProps } from "@phaselis/types";

interface DatepickerProps extends IFormPropTypes, SlotableLeftRightProps {
  inputMode?: "picker" | "textfield";
  contextValue?: any;
  mode?: "date" | "time" | "datetime";
  minDate?: Date;
  maxDate?: Date;
  format?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  style?: {
    container: ViewStyle;
    leftSlot: ViewStyle;
    element: TextStyle;
  };
  locale?: string; //locale type example > TR_tr
}

export { DatepickerProps };
