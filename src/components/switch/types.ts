import type { FC, ReactNode } from "react";
import type { ViewStyle } from "react-native";
import type { IconStyle, SlotChildComponent, SlotIconName } from "../../types";

export interface SwitchProps extends SwitchExtraProps {
  disabled?: boolean;
  contextValue?: any;
  value?: boolean;
  onChange?: (event: any, value: boolean) => void;
  duration?: number;
  style?:
    | {
        container?: ViewStyle;
        track?: ViewStyle;
        leftIcon?: IconStyle;
        rightIcon?: IconStyle;
        thumb?: ViewStyle;
      }
    | ViewStyle;
  containerStyle?: ViewStyle;
  thumbStyle?: ViewStyle;
  leftIconStyle?: IconStyle;
  rightIconStyle?: IconStyle;
  name?: string;
  showIcons?: boolean;
  LeftSlot?: SlotChildComponent;
  RightSlot?: SlotChildComponent;
  onIcon?: SlotIconName;
  offIcon?: SlotIconName;
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
