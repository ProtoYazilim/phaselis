import type { ReactNode } from "react";
import type { TextStyle, ViewStyle } from "react-native";
import type { IconStyle, SlotIconName } from "../../types";

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
