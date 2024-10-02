import React, { FC } from "react";
import { View } from "react-native";
import { PhaselisHOC } from "@phaselis/components/provider";
import { ColProps } from "./types";
import stylesheet from "./assets/styles";
import { useCombinedStyle } from "@phaselis/hooks";

const Col: FC<ColProps> = ({
  contextValue,
  style,
  size,
  children,
  offset,
  ...extraProps
}) => {
  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    { self: style },
    contextValue?.theme?.col,
    {
      size: String(size) as any,
      offset: String(offset) as any,
      ...extraProps,
    },
  );

  return (
    <>
      <View style={getCombinedStyle("self")}>{children}</View>
      {offset ? <View style={getCombinedStyle("offset")} /> : null}
    </>
  );
};

Col.displayName = "Column";

export default PhaselisHOC<ColProps, ColExtraProps>(Col);
