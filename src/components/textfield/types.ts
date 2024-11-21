import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
  ViewStyle,
} from "react-native";
import {
  IBaseStyleType,
  IFormPropTypes,
  SlotableLeftRightProps,
} from "@phaselis/types";
import { ReactNode } from "react";
import { Mask } from "react-native-mask-input";

export interface TextfieldProps
  extends IFormPropTypes,
    SlotableLeftRightProps,
    Omit<
      TextInputProps,
      "children" | "onBlur" | "onChange" | "value" | "style"
    > {
  placeholder?: string;
  readOnly?: boolean;
  validator?: any;
  style?: ITextfieldStyleType;
  loadingIcon?: ReactNode;
  loading?: boolean;
  uppercase?: boolean;
  maxLength?: number;
  type?: "default" | "text" | "number" | "email" | "phone" | "password";
  autoFocus?: boolean;
  secureTextEntry?: boolean;
  onFocus?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  mask?: Mask;
  numberOfLines?: number;
  textarea?: boolean;
  onChangeText?: any;
  disabled?: boolean;
  error?: any;
}

export interface ITextfieldStyleType extends IBaseStyleType {
  leftSlot?: ViewStyle;
  rightSlot?: ViewStyle;
}

export interface ITextfieldStateType {
  focused?: boolean;
}
export enum EnumKeyboardType {
  Default = "default",
  Text = "text",
  Number = "number",
  Email = "email",
  Phone = "phone",
  Password = "password",
}
