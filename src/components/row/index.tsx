import React, { FC } from "react";
import { View } from "react-native";
import { PhaselisHOC } from "@phaselis/components/provider";
import { RowProps } from "./types";
import stylesheet from "./assets/styles";
import { useCombinedStyle } from "@phaselis/hooks";

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

export default PhaselisHOC<RowProps, RowExtraProps>(Row);
