import type { FC } from "react";
import type { BlockProps } from "./types";
import { View, Animated } from "react-native";
import PhaselisHOC from "../provider/lib/hoc";

const Block: FC<BlockProps> = ({
  style,
  children,
  animated = false,
  ...extraProps
}) => {
  const WrapperComponent = animated ? Animated.View : View;

  return (
    <WrapperComponent style={style} {...(extraProps as any)}>
      {children}
    </WrapperComponent>
  );
};

Block.displayName = "Block";

export default PhaselisHOC(Block);
