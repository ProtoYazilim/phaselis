import { SlotIconName } from "@phaselis/types";

interface PopupProps {
  show?: boolean;
  duration?: number;
  onClose: any;
  fullScreen?: boolean;
  contextValue?: any;
  style?: any;
  leftIcon?: SlotIconName;
  rightIcon?: SlotIconName;
  LeftSlot?: any;
  title?: string;
  children?: any;
  type?: "default" | "info" | "warning" | "error" | "success";
}

export { PopupProps };
