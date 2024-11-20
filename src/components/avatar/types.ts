import { ComponentSize, IconStyle, SlotIconName } from "@phaselis/types/base";
import { TextStyle, ViewStyle } from "react-native";

export interface AvatarProps {
  id?: string;
  children?: any;
  style?: {
    container?: ViewStyle;
    icon?: IconStyle;
    text?: TextStyle;
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
