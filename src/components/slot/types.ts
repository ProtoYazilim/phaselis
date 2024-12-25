import { ComponentSize, SlotIconName } from "phaselis";
import { ReactElement } from "react";

interface SlotProps {
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

export default SlotProps;
