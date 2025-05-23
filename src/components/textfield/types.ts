import type {
  ComponentSize,
  IconStyle,
  InputControlProps,
  SlotableLeftRightProps,
} from "../../types";
import type {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from "react-native";
import type { FC, ReactNode } from "react";
import type { Mask } from "react-native-mask-input";

export interface TextfieldProps
  extends SlotableLeftRightProps,
    TextfieldExtraProps,
    InputControlProps<
      string,
      NativeSyntheticEvent<TextInputChangeEventData> | null,
      any
    >,
    Omit<
      TextInputProps,
      "children" | "onBlur" | "onChange" | "value" | "style"
    > {
  id?: string;
  contextValue?: any;
  value?: any;
  isChanged?: any; //not
  isUsed?: any; //not
  placeholder?: string;
  readOnly?: boolean;
  validator?: any;
  style?:
    | {
        container?: ViewStyle;
        text?: TextStyle;
        leftSlot?: IconStyle;
        rightSlot?: IconStyle;
      }
    | TextStyle;
  containerStyle?: ViewStyle;
  leftSlotStyle?: IconStyle;
  rightSlotStyle?: IconStyle;
  loadingIcon?: ReactNode;
  loading?: boolean;
  uppercase?: boolean;
  maxLength?: number;
  type?: "default" | "text" | "number" | "email" | "phone" | "password";
  autoFocus?: boolean;
  secureTextEntry?: boolean;
  onFocus?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  size?: ComponentSize;
  mask?: Mask;
  numberOfLines?: number;
  textarea?: boolean;
  onChangeText?: (text: string) => void;
  disabled?: boolean;
  error?: any;
  children?: ReactNode | FC | any | Element; //not used but maybe used in future
  className?: string; //not used but maybe used in future
  name?: string; //not used but maybe used in future
  partofform?: boolean; //not used but maybe used in future
  validations?: Function[]; //not used but maybe used in future
  resetValue?: any; //not used but maybe used in future
}

export enum EnumKeyboardType {
  Default = "default",
  Text = "text",
  Number = "number",
  Email = "email",
  Phone = "phone",
  Password = "password",
}
