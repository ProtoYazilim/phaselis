import {
  IFormPropTypes,
  SlotChildComponent,
  SlotIconName,
} from "@phaselis/types";
import { StyleProp, ViewStyle } from "react-native";

export interface SelectProps extends IFormPropTypes {
  options: IOptionType[];
  placeholder?: string;
  noOptionsMessage?: string;
  onChange?: (e: any, value?: any, data?: any) => any;
  validator?: any[];
  doneText?: string;
  style?: ISelectStyleType;
  displayField?: string;
  valueField?: string;
  LeftSlot?: SlotChildComponent;
  RightSlot?: SlotChildComponent;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  leftIcon?: SlotIconName;
  rightIcon?: SlotIconName;
}

export interface IOptionType {
  value: string;
  label: string;
  [key: string]: any;
}

export interface ISelectStateType {
  value?: string | null;
}
export interface ISelectStyleType {
  leftSlot?: StyleProp<ViewStyle>;
  rightSlot?: StyleProp<ViewStyle>;
  container?: ViewStyle;
  element?: ViewStyle;
}
