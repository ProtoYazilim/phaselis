import { ComponentSize, SlotIconName } from "@phaselis/types/base";
import { ReactElement } from "react";

interface SlotProps {
  children?: ReactElement;
  icon?: SlotIconName;
  style?: any;
  size?: ComponentSize;
  strokeWidth?: number;
  onClick?: () => void;
  width?: number;
  height?: number;
}

export default SlotProps;
