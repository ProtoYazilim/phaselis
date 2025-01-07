import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { IconStyle, SlotIconName } from "src/types";

export interface AvatarProps extends AvatarExtraProps {
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
  contextValue?: any;
  img?: string;
}
