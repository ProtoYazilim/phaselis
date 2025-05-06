import type { FC, ReactNode } from "react";
import type { TextStyle, ViewStyle } from "react-native";
import type {
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
  id?: string;
  text?: string;
  iconName?: SlotIconName;
  IconSlot?: SlotChildComponent;
  style?:
    | {
        container?: ViewStyle;
        element?: ViewStyle;
        icon?: IconStyle;
        text?: TextStyle;
      }
    | ViewStyle;
  containerStyle?: ViewStyle;
  iconStyle?: IconStyle;
  textStyle?: TextStyle;
  pressed?: boolean;
}
