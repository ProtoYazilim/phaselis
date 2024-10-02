import { TextStyle, ViewStyle } from "react-native";
import { ReactNode, FC, CSSProperties } from "react";
import { icons } from "lucide-react-native";

export interface IBasePropType {
  id?: string;
  children?: ReactNode | FC | any | Element;
  disabled?: boolean;
  className?: string;
  name?: string;
  contextValue?: any;
}

export type IGenericStyleType = CSSProperties | ViewStyle | TextStyle;

export interface IFormPropTypes extends IBasePropType {
  name?: string;
  value?: any;
  partofform?: boolean;
  validations?: any[];
  isChanged?: any;
  isUsed?: any;
  error?: any;
  onChange?: (event: any, value: any, ...args: any[]) => any;
  onBlur?: (event: any, value: any, ...args: any[]) => any;
  resetValue?: any;
  defaultValue?: any;
}

export interface IBaseStyleType {
  container?: IGenericStyleType;
  element?: IGenericStyleType;
}

export interface IBaseTextStyleType {
  element?: IGenericStyleType;
  text?: IGenericStyleType;
}

export interface IBaseGridStyleType {
  style?: IGenericStyleType;
}

export interface INavigationStyleType extends IBaseTextStyleType {}

export interface IBaseFormStyleType extends IBaseTextStyleType {}

export interface ICheckableEventType {
  nativeEvent: {
    text: any;
    checked: boolean;
  };
}

export type SlotIconName = keyof typeof icons;

export interface SlotableLeftRightProps {
  LeftSlot?: SlotChildComponent;
  RightSlot?: SlotChildComponent;
  leftIcon?: SlotIconName;
  rightIcon?: SlotIconName;
}

export type SlotChildComponent = ({
  size,
  defaultStyle,
  themeStyle,
  propStyle,
}: {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  defaultStyle?: ViewStyle & TextStyle;
  themeStyle?: ViewStyle & TextStyle;
  propStyle?: ViewStyle & TextStyle;
}) => ReactNode | FC | any | Element | null;
