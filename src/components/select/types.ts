import type { ComponentType, FC, ReactNode, RefObject } from "react";
import type { StyleProp, TextStyle, ViewStyle } from "react-native";
import type ReactNativePickerSelect from "react-native-picker-select";
import type {
  ComponentSize,
  InputControlProps,
  SlotChildComponent,
  SlotIconName,
} from "../../types";
import type { LinearGradientProps } from "react-native-linear-gradient";
export interface SelectProps
  extends Omit<InputControlProps<string, any, any, any>, "error">,
    SelectExtraProps {
  disabled?: boolean;
  options: any[];
  placeholder?: string;
  noOptionsMessage?: string;
  validator?: any[];
  doneText?: string;
  style?: SelectStyle | ViewStyle;
  displayField?: string; // Use the keys of Option
  valueField?: string; // Use the keys of Option
  size?: ComponentSize;
  leftIcon?: SlotIconName;
  rightIcon?: SlotIconName;
  closeIcon?: SlotIconName;
  closeIconSize?: ComponentSize;
  pickerType?: "native" | "custom";
  maxHeightModal?: number | "auto" | `${number}%`;
  fullScreenModal?: boolean;
  closeOnSelect?: boolean;
  id?: string;
  children?: ReactNode | FC | any | Element;
  className?: string;
  contextValue?: any;
  LeftSlot?: SlotChildComponent;
  RightSlot?: SlotChildComponent;
  CloseIconSlot?: ComponentType;
  HeaderSlot?: ComponentType<HeaderSlotProps>;
  NoOptionSlot?: ComponentType;
  InputSlot?: ComponentType<InputSlotProps>;
  OptionSlot?: ComponentType<OptionSlotProps>;
  containerStyle?: StyleProp<ViewStyle>;
  elementStyle?: StyleProp<TextStyle>;
  leftSlotStyle?: StyleProp<ViewStyle>;
  rightSlotStyle?: StyleProp<ViewStyle>;
}
export interface SelectStyle {
  container?: StyleProp<ViewStyle>;
  element?: StyleProp<TextStyle>;
  leftSlot?: StyleProp<ViewStyle>;
  rightSlot?: StyleProp<ViewStyle>;
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

export interface InputSlotProps
  extends Omit<InputControlProps<any, any, any>, "error">,
    Omit<SelectExtraProps, "error"> {
  placeholder?: string;
  selectedItem?: any;
  rightIcon?: SlotIconName;
  RightIconSlot?: React.ComponentType;
  leftIcon?: SlotIconName;
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

export interface CustomPickerProps extends PickerProps, SelectExtraProps {
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
  topLinearGradientProps?: LinearGradientProps;
  bottomLinearGradientProps?: LinearGradientProps;
  showTopBlur?: boolean;
  showBottomBlur?: boolean;
}

export interface NativePickerProps extends PickerProps, SelectExtraProps {
  refIOSPicker: RefObject<ReactNativePickerSelect>;
  refAndroidPicker: RefObject<ReactNativePickerSelect>;
  value: any;
  placeholder?: string;
  doneText?: string;
  darkMode?: boolean;
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
