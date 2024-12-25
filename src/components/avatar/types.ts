import { ComponentSize, IconStyle, SlotIconName } from "phaselis";
import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";

export interface AvatarProps {
  id?: string;
  children?: ReactNode;
  style?: {
    container?: ViewStyle;
    icon?: IconStyle;
    text?: TextStyle;
    image?: ViewStyle;
  };
  iconName?: SlotIconName;
  text?: string;
  disabled?: boolean;
  size?: ComponentSize;
  circle?: boolean;
  rounded?: boolean;
  square?: boolean;
  contextValue?: any;
  img?: string;
}
