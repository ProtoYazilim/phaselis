import { IFormPropTypes, SlotChildComponent } from "@phaselis/types";

interface SwitchProps extends IFormPropTypes {
  value?: boolean;
  onChange?: (event: any, value: boolean) => void;
  duration?: number;
  style?: any;
  name?: string;
  showIcons?: boolean;
  LeftSlot?: SlotChildComponent;
  RightSlot?: SlotChildComponent;
}

export { SwitchProps };
