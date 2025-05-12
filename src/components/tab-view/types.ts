import type { ReactNode } from "react";
import type { TextStyle, ViewStyle } from "react-native";
import type {
  IconStyle,
  SlotableLeftRightProps,
  SlotIconName,
} from "../../types";

interface TabViewHeaderProps extends SlotableLeftRightProps, TabViewExtraProps {
  value?: boolean;
  onChange?: (event: any, value: boolean) => void;
  onPress?: () => void;
  duration?: number;
  style?: {
    container?: ViewStyle;
    element?: ViewStyle;
  };
  containerStyle?: ViewStyle;
  contextValue?: any;
  data?: any[];
  activeTab?: number;
  id?: string | number;
  scrollable?: boolean;
  handleOnPress?: (index: number) => void;
}

interface TabHeaderItemProps extends SlotableLeftRightProps, TabViewExtraProps {
  activeTabIndex: number;
  index: number;
  item: any;
  handleOnLayout?: (event: any, index: number) => void;
  handleOnPress?: (index: number) => void;
  scrollable?: boolean;
  style?:
    | {
        container?: ViewStyle;
        leftSlot?: IconStyle;
        rightSlot?: IconStyle;
      }
    | TextStyle;
  containerStyle?: ViewStyle;
  leftSlotStyle?: IconStyle;
  rightSlotStyle?: IconStyle;
  contextValue?: any;
}

interface TabViewProps extends TabViewExtraProps {
  children: any | any[];
  headerProps?: TabViewHeaderProps;
  activeTab?: number;
  scrollable?: boolean;
  contextValue?: any;
  style?:
    | {
        container?: ViewStyle;
        element?: ViewStyle;
      }
    | ViewStyle;
  containerStyle?: ViewStyle;
}

interface TabItemProps extends TabViewExtraProps {
  children: ReactNode;
  contextValue?: any;
  style?:
    | {
        container?: ViewStyle;
      }
    | ViewStyle;
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
