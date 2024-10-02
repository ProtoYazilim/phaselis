import { ViewStyle } from "react-native";

import { StyleProp, TextStyle } from "react-native";
import { SlotableLeftRightProps } from "@phaselis/types";

interface LinkProps extends SlotableLeftRightProps {
  style?: StyleProp<TextStyle> & {
    container?: ViewStyle;
    element?: ViewStyle;
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
