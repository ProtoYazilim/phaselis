import { ReactNode } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { IconStyle, SlotableLeftRightProps } from "src/types";

interface TabViewHeaderProps extends SlotableLeftRightProps {
  value?: boolean;
  onChange?: (event: any, value: boolean) => void;
  onPress?: () => void;
  duration?: number;
  style?: {
    container?: ViewStyle;
    element?: ViewStyle;
  };
  contextValue?: any;
  data?: any[];
  activeTab?: number;
  id?: string | number;
  scrollable?: boolean;
  handleOnPress?: (index: number) => void;
}

interface TabHeaderItemProps extends SlotableLeftRightProps {
  activeTabIndex: number;
  index: number;
  item: any;
  handleOnLayout?: (event: any, index: number) => void;
  handleOnPress?: (index: number) => void;
  scrollable?: boolean;
  style?: {
    container?: ViewStyle;
    text?: TextStyle;
    element?: ViewStyle;
    leftSlot?: IconStyle;
    rightSlot?: IconStyle;
  };
  contextValue?: any;
}

interface TabViewProps {
  children: any | any[];
  headerProps?: TabViewHeaderProps;
  activeTab?: number;
  scrollable?: boolean;
  contextValue?: any;
  style?: {
    container?: ViewStyle;
    element?: ViewStyle;
  };
}

interface TabItemProps {
  children: ReactNode;
  contextValue?: any;
  style?: {
    container?: ViewStyle;
  };
  title: string;
}

export { TabViewHeaderProps, TabHeaderItemProps, TabViewProps, TabItemProps };
