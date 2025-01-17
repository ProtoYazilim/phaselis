import { PressableProps, ViewStyle } from "react-native";
import { StyleProp, TextStyle } from "react-native";
import { IconStyle, SlotableLeftRightProps } from "../../types";

interface LinkProps
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

export { LinkProps };
