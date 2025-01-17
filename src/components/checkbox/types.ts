import { FC, ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";
import {
  IconStyle,
  InputControlProps,
  SlotChildComponent,
  SlotIconName,
} from "../../types";

export interface CheckboxProps
  extends InputControlProps<boolean, any, any>,
    CheckboxExtraProps {
  children?: ReactNode | FC | any | Element;
  contextValue?: any;
  disabled?: boolean;
  // size?: ComponentSize;
  id?: string;
  text?: string;
  iconName?: SlotIconName;
  IconSlot?: SlotChildComponent;
  style?: {
    container?: ViewStyle;
    element?: ViewStyle;
    icon?: IconStyle;
    text?: TextStyle;
  };
  pressed?: boolean;
}
