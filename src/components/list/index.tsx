import React from "react";
import { FlatList as NativeFlatList } from "react-native";
import { PhaselisHOC } from "@phaselis/components/provider";
import stylesheet from "./assets/styles";
import { ListProps } from "./types";
import { useCombinedStyle } from "@phaselis/hooks";

const List = ({
  data,
  renderItem,
  contextValue,
  style,
  numColumns,
  ...extraProps
}: ListProps) => {
  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.list,
    {
      ...(extraProps as any),
    }
  );

  return (
    <NativeFlatList
      data={data}
      renderItem={renderItem}
      style={getCombinedStyle("element")}
      contentContainerStyle={getCombinedStyle("container")}
      columnWrapperStyle={
        numColumns && numColumns > 0 ? getCombinedStyle("columnWrapper") : null
      }
      ListHeaderComponentStyle={getCombinedStyle("header")}
      ListFooterComponentStyle={getCombinedStyle("footer")}
      {...extraProps}
    />
  );
};

export default PhaselisHOC<ListProps, ListExtraProps>(List);
