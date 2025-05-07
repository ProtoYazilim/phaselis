import { type FC } from "react";
import type { ListProps } from "./types";
import { FlatList as NativeFlatList } from "react-native";
import PhaselisHOC from "../provider/lib/hoc";
import stylesheet from "./assets/styles";
import { useCombinedStyle } from "../../hooks";

const List: FC<ListProps> = (props) => {
  const { numColumns } = props;
  const { getCombinedStyle } = useCombinedStyle(stylesheet, "list", "default", {
    ...(props as any),
  });

  return (
    <NativeFlatList
      contentContainerStyle={getCombinedStyle("container")}
      columnWrapperStyle={
        numColumns && numColumns > 0 ? getCombinedStyle("columnWrapper") : null
      }
      ListHeaderComponentStyle={getCombinedStyle("header")}
      ListFooterComponentStyle={getCombinedStyle("footer")}
      {...props}
      style={getCombinedStyle("element", true)}
    />
  );
};

export default PhaselisHOC(List);
