import type { ReactNode } from "react";
import type { TextStyle, ViewStyle } from "react-native";
import type { IconStyle, SlotChildComponent, SlotIconName } from "../../types";

export interface PopupProps extends PopupExtraProps {
  show?: boolean;
  duration?: number;
  onClose: () => void;
  fullScreen?: boolean;
  contextValue?: any;
  style?: {
    title?: TextStyle;
    container?: ViewStyle;
    header?: ViewStyle;
    element?: ViewStyle;
    leftSlot?: IconStyle;
    closeIcon?: IconStyle;
    backDrop?: ViewStyle;
  };
  leftIcon?: SlotIconName;
  rightIcon?: SlotIconName;
  LeftSlot?: SlotChildComponent;
  title?: string;
  children?: ReactNode;
  backgroundBlur?: boolean;
}
