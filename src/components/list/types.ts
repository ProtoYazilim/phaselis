import type { FlatListProps, ViewStyle } from "react-native";

export interface ListProps
  extends Omit<
    FlatListProps<any>,
    | "style"
    | "contentContainerStyle"
    | "columnWrapperStyle"
    | "ListHeaderComponentStyle"
    | "ListFooterComponentStyle"
  > {
  contextValue?: any;
  style?: {
    columnWrapper?: ViewStyle;
    container?: ViewStyle;
    element?: ViewStyle;
    footer?: ViewStyle;
    header?: ViewStyle;
  };
}
