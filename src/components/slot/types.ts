import { ComponentSize } from "@phaselis/types/base";

interface SlotProps {
  children?: any;
  icon?: any;
  style?: any;
  size?: ComponentSize;
  strokeWidth?: number;
  onClick?: () => void;
  parentStates?: any;
  width?: number;
  height?: number;
}

export default SlotProps;
