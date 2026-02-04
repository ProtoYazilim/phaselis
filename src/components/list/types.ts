import type { FlatListProps, ViewStyle } from "react-native";
import type { UnistylesValues } from "react-native-unistyles";

export interface ListStyles {
  columnWrapper?: UnistylesValues;
  container?: UnistylesValues;
  element?: UnistylesValues;
  footer?: UnistylesValues;
  header?: UnistylesValues;
}

export interface ListProps extends Omit<
  FlatListProps<any>,
  | "style"
  | "contentContainerStyle"
  | "columnWrapperStyle"
  | "ListHeaderComponentStyle"
  | "ListFooterComponentStyle"
> {
  contextValue?: any;
  style?: ListStyles | ViewStyle;
  columnWrapperStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  headerStyle?: ViewStyle;
  footerStyle?: ViewStyle;
}
