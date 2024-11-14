import {
  IFormPropTypes,
  SlotChildComponent,
  SlotIconName,
  ComponentSize,
} from "@phaselis/types";
import { ComponentType } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import ReactNativePickerSelect from "react-native-picker-select";

export interface SelectProps extends IFormPropTypes {
  options: IOptionType[];
  placeholder?: string;
  noOptionsMessage?: string;
  onChange?: (e: any, value?: any, data?: any) => any;
  validator?: any[];
  doneText?: string;
  style?: ISelectStyleType;
  displayField?: string;
  valueField?: string;
  LeftSlot?: SlotChildComponent;
  RightSlot?: SlotChildComponent;
  size?: ComponentSize;
  leftIcon?: SlotIconName;
  rightIcon?: SlotIconName;
  HeaderSlot?: ComponentType<{
    closeIcon: SlotIconName;
    closeIconSize: ComponentSize;
    CloseIconSlot?: ComponentType;
  }>;
  closeIcon?: SlotIconName;
  closeIconSize?: ComponentSize;
  CloseIconSlot?: ComponentType;
  pickerType?: "native" | "custom";
  InputSlot?: ComponentType;
  OptionSlot?: ComponentType<OptionSlotProps>;
  maxHeightModal?: number | string;
  fullScreenModal?: boolean;
  closeOnSelect?: boolean;
  NoOptionSlot?: ComponentType;
}

export interface IOptionType {
  value: string;
  label: string;
  [key: string]: any;
}

export interface ISelectStateType {
  value?: string | null;
}
export interface ISelectStyleType {
  leftSlot?: StyleProp<ViewStyle>;
  rightSlot?: StyleProp<ViewStyle>;
  container?: ViewStyle;
  element?: ViewStyle;
}

export interface OptionSlotProps {
  item?: {
    label: string;
    value: string;
    subLabel?: string;
  };
  selectedItem?: any;
  style?: {
    container?: ViewStyle;
    selected?: ViewStyle;
    outerElement?: ViewStyle;
    innerElement?: ViewStyle;
    text?: TextStyle;
  };
  contextValue?: any;
}

export interface NoOptionSlotProps {
  text?: string;
  style?: {
    container?: ViewStyle;
    text?: TextStyle;
  };
  contextValue?: any;
}

export interface HeaderSlotProps {
  text?: string;
  setShowPicker?: (show: boolean) => void;
  closeIcon?: any;
  closeIconSize?: React.ComponentType;
  CloseIconSlot?: React.ReactNode;
  closeOnSelect?: boolean;
  getCombinedStyle?: any;
  doneText?: string;
  contextValue?: any;
  style?: {
    container?: ViewStyle;
    text?: TextStyle;
    doneText?: TextStyle;
  };
}

export interface CloseIconSlotProps {
  setShowPicker?: (show: boolean) => void;
  getCombinedStyle?: any;
  closeIcon?: any;
  closeIconSize?: ComponentSize;
  contextValue?: any;
  style?: {
    closeIconSlot?: ViewStyle & TextStyle;
  };
}

export interface InputSlotProps extends IFormPropTypes {
  placeholder?: string;
  selectedItem?: any;
  rightIcon?: SlotIconName;
  rightIconSize?: ComponentSize;
  RightIconSlot?: React.ComponentType;
  leftIcon?: SlotIconName;
  leftIconSize?: ComponentSize;
  LeftIconSlot?: React.ComponentType;
  disabled?: boolean;
  refAndroidPicker?: any;
  refIOSPicker?: any;
  setShowPicker?: React.Dispatch<React.SetStateAction<boolean>>;
  style?: {
    leftSlot?: ViewStyle & TextStyle;
    rightSlot?: ViewStyle & TextStyle;
    container?: ViewStyle;
    element?: TextStyle;
  };
  contextValue?: any;
  showError?: boolean;
  isFocus?: boolean;
  size?: ComponentSize;
}

export interface CustomPickerProps extends PickerProps {
  showPicker: boolean;
  setShowPicker: React.Dispatch<React.SetStateAction<boolean>>;
  maxHeightModal?: number | string;
  fullScreenModal?: boolean;
  HeaderSlot?: React.ComponentType<{
    closeIcon: SlotIconName;
    closeIconSize: ComponentSize;
    CloseIconSlot?: React.ComponentType;
  }>;
  closeIcon?: SlotIconName;
  closeIconSize?: ComponentSize;
  CloseIconSlot?: React.ComponentType;
  OptionSlot?: React.ComponentType<OptionSlotProps>;
  NoOptionSlot?: React.ComponentType;
  closeOnSelect?: boolean;
}

export interface NativePickerProps extends PickerProps {
  refIOSPicker: React.RefObject<ReactNativePickerSelect>;
  refAndroidPicker: React.RefObject<ReactNativePickerSelect>;
  value: any;
  placeholder?: string;
  doneText?: string;
}

export interface PickerProps {
  onChange?: (e: any, value?: any, data?: any) => any;
  options: any[];
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
  style?: {
    container?: ViewStyle;
    element?: TextStyle;
    leftSlot?: ViewStyle | TextStyle;
    rightSlot?: ViewStyle | TextStyle;
  };
  showError?: boolean;
  isFocus?: boolean;
  size?: ComponentSize;
  selectedItem?: any | undefined;
  disabled?: boolean;
  contextValue?: any;
}
