import { SlotIconName } from "@phaselis/types";
import { SharedValue } from "react-native-reanimated";

interface PopupProps {
  isOpen?: boolean | SharedValue<Boolean>;
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
}

export { PopupProps };
