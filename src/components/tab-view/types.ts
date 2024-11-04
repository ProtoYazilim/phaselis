import { SlotableLeftRightProps } from "@phaselis/types";
import { ViewStyle } from "react-native";

interface TabViewHeaderProps extends SlotableLeftRightProps {
  value?: boolean;
  onChange?: (event: any, value: boolean) => void;
  onPress?: () => void;
  duration?: number;
  style?: any;
  contextValue?: any;
  data?: any[];
  activeTab?: number;
  id?: any;
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
  style?: any;
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
  children: any;
  contextValue?: any;
  style?: {
    container?: ViewStyle;
  };
}

export { TabViewHeaderProps, TabHeaderItemProps, TabViewProps, TabItemProps };
