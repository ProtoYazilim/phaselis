import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { IconStyle, SlotChildComponent, SlotIconName } from "../../types";

interface PopupProps extends PopupExtraProps {
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
}

export { PopupProps };
