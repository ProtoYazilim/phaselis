import type { PressableProps, ViewStyle } from "react-native";
import type { StyleProp, TextStyle } from "react-native";
import type { UnistylesValues } from "react-native-unistyles";
import type { IconStyle, SlotableLeftRightProps } from "../../types";

export interface LinkStyles {
  container?: UnistylesValues;
  text?: UnistylesValues;
  leftSlot?: UnistylesValues;
  rightSlot?: UnistylesValues;
}

export interface LinkProps
  extends
    SlotableLeftRightProps,
    LinkExtraProps,
    Omit<PressableProps, "style"> {
  style?: LinkStyles | StyleProp<TextStyle> | undefined | TextStyle | UnistylesValues;
  containerStyle?: ViewStyle | UnistylesValues;
  leftSlotStyle?: ViewStyle | IconStyle | UnistylesValues;
  rightSlotStyle?: ViewStyle | IconStyle | UnistylesValues;
  contextValue?: any;
  text?: string;
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  href?: string;
  canOpenURL?: boolean;
}
