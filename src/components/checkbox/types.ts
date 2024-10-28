import {
  ICheckableEventType,
  IconStyle,
  IFormPropTypes,
  SlotChildComponent,
  SlotIconName,
} from "@phaselis/types";
import { ChangeEvent } from "react";
import { TextStyle, ViewStyle } from "react-native";

export interface CheckboxProps extends IFormPropTypes {
  id?: string;
  text?: string;
  style?: {
    container?: ViewStyle;
    element?: ViewStyle;
    icon?: IconStyle;
    text?: TextStyle;
  };
  // autoFocus?: boolean;
  iconName?: SlotIconName;
  IconSlot?: SlotChildComponent;
  onChange?: (
    e: ChangeEvent<HTMLInputElement> | ICheckableEventType,
    value: boolean,
  ) => any;
  // onMouseOut?: (event: MouseEvent<HTMLElement>) => void;
  // onMouseOver?: (event: MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
}
