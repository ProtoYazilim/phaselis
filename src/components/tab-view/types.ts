import type { ReactNode } from "react";
import type { TextStyle, ViewStyle } from "react-native";
import type { UnistylesValues } from "react-native-unistyles";
import type {
  IconStyle,
  SlotableLeftRightProps,
  SlotIconName,
} from "../../types";

export interface TabViewHeaderStyles {
  container?: UnistylesValues;
  element?: UnistylesValues;
}

interface TabViewHeaderProps extends SlotableLeftRightProps, TabViewExtraProps {
  value?: boolean;
  onChange?: (event: any, value: boolean) => void;
  onPress?: () => void;
  duration?: number;
  style?: TabViewHeaderStyles | UnistylesValues;
  containerStyle?: ViewStyle | UnistylesValues;
  contextValue?: any;
  data?: any[];
  activeTab?: number;
  id?: string | number;
  scrollable?: boolean;
  handleOnPress?: (index: number) => void;
  tabHeaderItemProps?: TabHeaderItemProps;
}

export interface TabHeaderItemStyles {
  container?: UnistylesValues;
  leftSlot?: UnistylesValues;
  rightSlot?: UnistylesValues;
}

interface TabHeaderItemProps extends SlotableLeftRightProps, TabViewExtraProps {
  activeTabIndex: number;
  index: number;
  item: any;
  handleOnLayout?: (event: any, index: number) => void;
  handleOnPress?: (index: number) => void;
  scrollable?: boolean;
  style?: TabHeaderItemStyles | TextStyle | UnistylesValues;
  containerStyle?: ViewStyle | UnistylesValues;
  leftSlotStyle?: IconStyle;
  rightSlotStyle?: IconStyle;
  contextValue?: any;
}

export interface TabViewStyles {
  container?: UnistylesValues;
  element?: UnistylesValues;
}

interface TabViewProps extends TabViewExtraProps {
  children: any | any[];
  headerProps?: TabViewHeaderProps;
  activeTab?: number;
  scrollable?: boolean;
  contextValue?: any;
  style?: TabViewStyles | ViewStyle | UnistylesValues;
  containerStyle?: ViewStyle | UnistylesValues;
}

export interface TabItemStyles {
  container?: UnistylesValues;
}

interface TabItemProps extends TabViewExtraProps {
  children: ReactNode;
  contextValue?: any;
  style?: TabItemStyles | ViewStyle | UnistylesValues;
  title: string;
  leftIcon?: SlotIconName;
  rightIcon?: SlotIconName;
}

export type {
  TabViewHeaderProps,
  TabHeaderItemProps,
  TabViewProps,
  TabItemProps,
};
