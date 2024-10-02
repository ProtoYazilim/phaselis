import { FlatListProps, ViewStyle } from "react-native";

interface ListProps
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

export { ListProps };
