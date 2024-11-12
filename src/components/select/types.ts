import {
  InputSlotComponent,
  IFormPropTypes,
  SlotChildComponent,
  SlotIconName,
  HeaderSlotComponent,
  ComponentSize,
} from "@phaselis/types";
import React, { Component } from "react";
import { StyleProp, ViewStyle } from "react-native";

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
  HeaderSlot?: React.ComponentType<{
    closeIcon: SlotIconName;
    closeIconSize: ComponentSize;
    CloseIconSlot?: React.ComponentType;
  }>;
  closeIcon?: SlotIconName;
  closeIconSize?: ComponentSize;
  CloseIconSlot?: React.ComponentType;
  pickerType?: "native" | "custom";
  InputSlot?: InputSlotComponent;
  OptionSlot?: React.ComponentType<{ option: any }>;
  maxHeightModal?: number | string;
  fullScreenModal?: boolean;
  closeOnSelect?: boolean;
  NoOptionSlot?: React.ComponentType;
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
