import type { ComponentSize, SlotIconName } from "../../types";

export interface LucideIconProps {
  name?: SlotIconName;
  size?: ComponentSize;
  style?: any;
  width?: number;
  height?: number;
  strokeWidth?: number;
  onClick?: () => void;
  onPress?: () => void;
}
