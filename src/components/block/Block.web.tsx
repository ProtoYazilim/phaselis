import type { FC } from "react";
import type { BlockProps } from "./types";
import { View } from "react-native";
import PhaselisHOC from "../provider/lib/hoc";

const Block: FC<BlockProps> = ({ style, children, ...extraProps }) => {
  return (
    <View style={style} {...extraProps}>
      {children}
    </View>
  );
};

Block.displayName = "Block";

export default PhaselisHOC(Block);
