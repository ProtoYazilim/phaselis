import type { ReactElement } from "react";
import type { ComponentSize, SlotIconName } from "../../types";

export interface SlotProps {
  children?: ReactElement;
  icon?: SlotIconName;
  style?: any;
  size?: ComponentSize;
  strokeWidth?: number;
  onClick?: () => void;
  onPress?: () => void;
  width?: number;
  height?: number;
  loading?: boolean;
}
