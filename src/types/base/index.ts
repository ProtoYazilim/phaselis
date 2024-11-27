import { TextStyle, ViewStyle } from "react-native";
import { ReactNode, FC } from "react";
import { icons } from "lucide-react-native";

export interface ShadowAttributes {
  color?: string;
  opacity?: number;
  offset?: [number, number];
  radius?: number;
}

export interface LinearGradientAttributes {
  colors: (string | number)[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  locations?: number[];
  useAngle?: boolean;
  angleCenter?: { x: number; y: number };
  angle?: number;
}

export type ComponentSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

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
  size?: ComponentSize;
  defaultStyle?: ViewStyle & TextStyle;
  themeStyle?: ViewStyle & TextStyle;
  propStyle?: ViewStyle & TextStyle;
}) => ReactNode | FC | any | Element | null;

//docs -> interfaces şeklinde tanımlanacak
export interface IconStyle extends ViewStyle {
  color: string;
}
