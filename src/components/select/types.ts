import {
  SlotChildComponent,
  SlotIconName,
  ComponentSize,
  InputControlProps,
} from "phaselis";
import { ComponentType, FC, ReactNode, RefObject } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import ReactNativePickerSelect from "react-native-picker-select";
export interface SelectProps extends InputControlProps<string, any, any, any> {
  disabled?: boolean;
  options: any[];
  placeholder?: string;
  noOptionsMessage?: string;
  validator?: any[];
  doneText?: string;
  style?: {
    leftSlot?: StyleProp<ViewStyle>;
    rightSlot?: StyleProp<ViewStyle>;
    container?: ViewStyle;
    element?: ViewStyle;
  };
  displayField?: string; // Use the keys of Option
  valueField?: string; // Use the keys of Option
  LeftSlot?: SlotChildComponent;
  RightSlot?: SlotChildComponent;
  size?: ComponentSize;
  leftIcon?: SlotIconName;
  rightIcon?: SlotIconName;
  HeaderSlot?: ComponentType<HeaderSlotProps>;
  closeIcon?: SlotIconName;
  closeIconSize?: ComponentSize;
  CloseIconSlot?: ComponentType;
  pickerType?: "native" | "custom";
  InputSlot?: ComponentType<InputSlotProps>;
  OptionSlot?: ComponentType<OptionSlotProps>;
  maxHeightModal?: number | "auto" | `${number}%`;
  fullScreenModal?: boolean;
  closeOnSelect?: boolean;
  NoOptionSlot?: ComponentType;
  id?: string;
  children?: ReactNode | FC | any | Element;
  className?: string;
  contextValue?: any;
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
  onChange?: (e: any, value?: any, data?: any) => any;
  setShowPicker?: (show: boolean) => void;
  closeOnSelect?: boolean;
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

export interface InputSlotProps extends InputControlProps<any, any, any> {
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
  id?: string; //not used but maybe in the future
  children?: ReactNode | FC | any | Element; //not used but maybe in the future
  className?: string; //not used but maybe in the future
}

export interface CustomPickerProps extends PickerProps {
  showPicker: boolean;
  setShowPicker: React.Dispatch<React.SetStateAction<boolean>>;
  maxHeightModal?: number | "auto" | `${number}%`;
  fullScreenModal?: boolean;
  HeaderSlot?: React.ComponentType<HeaderSlotProps>;
  closeIcon?: SlotIconName;
  closeIconSize?: ComponentSize;
  CloseIconSlot?: React.ComponentType;
  OptionSlot?: React.ComponentType<OptionSlotProps>;
  NoOptionSlot?: React.ComponentType;
  closeOnSelect?: boolean;
}

export interface NativePickerProps extends PickerProps {
  refIOSPicker: RefObject<ReactNativePickerSelect>;
  refAndroidPicker: RefObject<ReactNativePickerSelect>;
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
