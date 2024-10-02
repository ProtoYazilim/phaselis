import {
  IBaseStyleType,
  IFormPropTypes,
  SlotChildComponent,
  SlotIconName,
} from "@phaselis/types";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export interface SelectProps extends IFormPropTypes {
  options: IOptionType[];
  placeholder?: string;
  isLoading?: boolean;
  noOptionsMessage?: string;
  autoFocus?: boolean;
  onChange?: (e: any, value?: any, data?: any) => any;
  validator?: any[];
  dropdownIndicator?: any;
  loadingIndicator?: any;
  clearIndicator?: any;
  useNativeAndroidPickerStyle?: boolean;
  fixAndroidTouchableBug?: boolean;
  doneText?: string;
  style?: ISelectStyleType;
  clearable?: boolean;
  searchable?: boolean;
  onSelection?: (e?: any) => void;
  formatOptionLabel?: (options: IOptionType[]) => any;
  components?: any;
  filterOption?: (options: any, inputValue: string) => boolean;
  displayField?: string;
  valueField?: string;
  LeftSlot?: SlotChildComponent;
  RightSlot?: SlotChildComponent;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  leftIcon?: SlotIconName;
  rightIcon?: SlotIconName;
}

export interface IOptionType {
  value: string;
  label: string;
  [key: string]: any;
}

export interface ISelectStateType {
  value?: string | null;
}
export interface ISelectStyleType extends IBaseStyleType {
  dropdownIndicator?: StyleProp<ViewStyle>;
  clearIndicator?: StyleProp<ViewStyle>;
  loadingIndicator?: StyleProp<ViewStyle>;
  indicatorSeparator?: StyleProp<ViewStyle>;
  placeholderStyle?: StyleProp<TextStyle>;
  text?: StyleProp<TextStyle>;
  leftSlot?: StyleProp<ViewStyle>;
  rightSlot?: StyleProp<ViewStyle>;
}
