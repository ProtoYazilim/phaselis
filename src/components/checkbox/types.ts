import {
  ICheckableEventType,
  IconStyle,
  SlotChildComponent,
  SlotIconName,
  ComponentSize,
} from "@phaselis/types";
import { ChangeEvent, FC, ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";

export interface CheckboxProps {
  children?: ReactNode | FC | any | Element;
  contextValue?: any;
  value?: any;
  disabled?: boolean;
  size?: ComponentSize;
  isChanged?: any; //not
  isUsed?: any; //not
  error?: any; //not
  id?: string;
  text?: string;
  iconName?: SlotIconName;
  IconSlot?: SlotChildComponent;
  onChange?: (
    e: ChangeEvent<HTMLInputElement> | ICheckableEventType,
    value: boolean,
  ) => any;
  onBlur?: (event: any, value: any, ...args: any[]) => void;
  style?: {
    container?: ViewStyle;
    element?: ViewStyle;
    icon?: IconStyle;
    text?: TextStyle;
  };
  partofform?: boolean; //unused but maybe used in the future
  validations?: Function[]; //unused but maybe used in the future
  resetValue?: any; //unused but maybe used in the future
  // className?: string;
  // name?: string;
  // autoFocus?: boolean;
  // onMouseOut?: (event: MouseEvent<HTMLElement>) => void;
  // onMouseOver?: (event: MouseEvent<HTMLElement>) => void;
}
