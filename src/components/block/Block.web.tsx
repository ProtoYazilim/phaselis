import type { FC } from "react";
import type { BlockProps } from "./types";
import { View } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";
import PhaselisHOC from "../provider/lib/hoc";

const Block: FC<BlockProps> = ({ style, children, ...extraProps }) => {
  return (
    <View style={style as StyleProp<ViewStyle>} {...extraProps}>
      {children}
    </View>
  );
};

Block.displayName = "Block";

export default PhaselisHOC(Block);
