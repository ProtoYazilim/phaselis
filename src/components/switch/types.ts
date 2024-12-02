import { IconStyle, SlotChildComponent } from "@phaselis/types";
import { FC, ReactNode } from "react";
import { ViewStyle } from "react-native";

interface SwitchProps {
  disabled?: boolean;
  contextValue?: any;
  value?: boolean;
  onChange?: (event: any, value: boolean) => void;
  duration?: number;
  style?: {
    container?: ViewStyle;
    element?: ViewStyle;
    track?: ViewStyle;
    leftIcon?: IconStyle;
    rightIcon?: IconStyle;
    thumb?: ViewStyle;
  };
  name?: string;
  showIcons?: boolean;
  LeftSlot?: SlotChildComponent;
  RightSlot?: SlotChildComponent;
  id?: string; //not used but maybe in future
  children?: ReactNode | FC | any | Element; //not used but maybe in future
  className?: string; //not used but maybe in future
  partofform?: boolean; //not used but maybe in future
  validations?: Function[]; //not used but maybe in future
  isChanged?: any; //not
  isUsed?: any; //not
  error?: any; //not
  onBlur?: (event: any, value: any, ...args: any[]) => void; //not used but maybe in future
  resetValue?: any; //not used but maybe in future
}

export { SwitchProps };
