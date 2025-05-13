import type { ReactNode } from "react";
import type { TextStyle, ViewStyle } from "react-native";
import type { IconStyle, SlotChildComponent, SlotIconName } from "../../types";

export interface PopupProps extends PopupExtraProps {
  show?: boolean;
  duration?: number;
  onClose: () => void;
  fullScreen?: boolean;
  contextValue?: any;
  style?: PopupStyles | ViewStyle;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  headerStyle?: ViewStyle;
  leftSlotStyle?: ViewStyle | IconStyle;
  closeIconStyle?: ViewStyle | IconStyle;
  backDropStyle?: ViewStyle;
  leftIcon?: SlotIconName;
  rightIcon?: SlotIconName;
  LeftSlot?: SlotChildComponent;
  title?: string;
  children?: ReactNode;
  backgroundBlur?: boolean;
}

export interface PopupStyles {
  container?: ViewStyle;
  element?: ViewStyle;
  title?: TextStyle;
  header?: ViewStyle;
  leftSlot?: ViewStyle | IconStyle;
  closeIcon?: ViewStyle | IconStyle;
  backDrop?: ViewStyle;
}
