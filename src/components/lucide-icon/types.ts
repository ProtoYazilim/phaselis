import type { ViewStyle } from "react-native";
import type { UnistylesValues } from "react-native-unistyles";
import type { ComponentSize, SlotIconName } from "../../types";

export interface LucideIconStyles {
  container?: UnistylesValues;
}

export interface LucideIconProps {
  name?: SlotIconName;
  size?: ComponentSize;
  style?: LucideIconStyles | ViewStyle | UnistylesValues;
  width?: number;
  height?: number;
  strokeWidth?: number;
  onClick?: () => void;
  onPress?: () => void;
}
