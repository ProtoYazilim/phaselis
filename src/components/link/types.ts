import type { PressableProps, ViewStyle } from "react-native";
import type { StyleProp, TextStyle } from "react-native";
import type { IconStyle, SlotableLeftRightProps } from "../../types";

export interface LinkProps
  extends SlotableLeftRightProps,
    LinkExtraProps,
    Omit<PressableProps, "style"> {
  style?:
    | (StyleProp<TextStyle> & {
        container?: ViewStyle;
        text?: TextStyle;
        leftSlot?: IconStyle;
        rightSlot?: IconStyle;
      })
    | undefined;
  contextValue?: any;
  text?: string;
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  href?: string;
  canOpenURL?: boolean;
}
