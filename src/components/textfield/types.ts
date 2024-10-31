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
import { ReactNode, KeyboardEvent, MouseEvent } from "react";
import { Mask } from "react-native-mask-input";

export interface TextFieldProps
  extends IFormPropTypes,
    SlotableLeftRightProps,
    Omit<
      TextInputProps,
      "children" | "onBlur" | "onChange" | "value" | "style"
    > {
  placeholder?: string;
  readOnly?: boolean;
  validator?: any;
  style?: ITextFieldStyleType;
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

export interface ITextFieldStyleType extends IBaseStyleType {
  leftSlot?: ViewStyle;
  rightSlot?: ViewStyle;
}

export interface ITextFieldStateType {
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

type AutoCompleteValue =
  | "on"
  | "off"
  | "name"
  | "honorific-prefix"
  | "given-name"
  | "additional-name"
  | "family-name"
  | "honorific-suffix"
  | "nickname"
  | "username"
  | "new-password"
  | "current-password"
  | "one-time-code"
  | "organization-title"
  | "organization"
  | "street-address"
  | "address-line1"
  | "address-line2"
  | "address-line3"
  | "address-level4"
  | "address-level3"
  | "address-level2"
  | "address-level1"
  | "country"
  | "country-name"
  | "postal-code"
  | "cc-name"
  | "cc-given-name"
  | "cc-additional-name"
  | "cc-family-name"
  | "cc-number"
  | "cc-exp"
  | "cc-exp-month"
  | "cc-exp-year"
  | "cc-csc"
  | "cc-type"
  | "transaction-currency"
  | "transaction-amount"
  | "language"
  | "bday"
  | "bday-day"
  | "bday-month"
  | "bday-year"
  | "sex"
  | "url"
  | "photo";
