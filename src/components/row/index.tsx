import React, { FC } from "react";
import { View } from "react-native";
import { PhaselisHOC, useCombinedStyle } from "phaselis";
import { RowProps } from "./types";
import stylesheet from "./assets/styles";

const Row: FC<RowProps> = ({
  contextValue,
  style,
  children,
  ...extraProps
}) => {
  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    { self: style },
    contextValue?.theme?.row,
    {
      ...extraProps,
    },
  );

  return (
    <>
      <View style={getCombinedStyle("self")}>{children}</View>
    </>
  );
};

Row.displayName = "Row";

export default PhaselisHOC(Row);
