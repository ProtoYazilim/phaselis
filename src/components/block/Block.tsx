import React, { FC } from "react";
import { View } from "react-native";
import { PhaselisHOC } from "@phaselis/components/provider";
import { BlockProps } from "./types";
import stylesheet from "./assets/styles";
import { useCombinedStyle } from "@phaselis/hooks";

const Block: FC<BlockProps> = ({
  contextValue,
  style,
  children,
  ...extraProps
}) => {
  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    { self: style },
    contextValue?.theme?.block,
    {
      ...extraProps,
    },
  );

  return <View style={getCombinedStyle("self")}>{children}</View>;
};

Block.displayName = "Block";

export default PhaselisHOC<BlockProps, BlockExtraProps>(Block);
