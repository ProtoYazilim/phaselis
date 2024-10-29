import { PressableProps, ViewStyle } from "react-native";

import { StyleProp, TextStyle } from "react-native";
import { SlotableLeftRightProps } from "@phaselis/types";

//TODO: component'e uygun router'a göre adaptor yazılacak
interface LinkProps extends SlotableLeftRightProps, PressableProps {
  style?: StyleProp<TextStyle> & {
    container?: ViewStyle;
    text?: TextStyle;
    leftSlot?: ViewStyle;
    rightSlot?: ViewStyle;
  };
  contextValue?: any;
  text?: string;
  mode?: "push" | "replace";
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  href?: string;
}

export { LinkProps };
