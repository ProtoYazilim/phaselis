import type { ReactNode } from "react";
import type { ImageStyle, TextStyle, ViewStyle } from "react-native";
import type { IconStyle, SlotIconName } from "../../types";

export interface AvatarProps extends AvatarExtraProps {
  id?: string;
  children?: ReactNode;
  style?: AvatarStyle | ViewStyle | TextStyle | ImageStyle;
  containerStyle?: ViewStyle;
  iconName?: SlotIconName;
  text?: string;
  disabled?: boolean;
  contextValue?: any;
  img?: string;
}

export interface AvatarStyle {
  container?: ViewStyle;
  icon?: IconStyle;
  text?: TextStyle;
  image?: ViewStyle;
}
