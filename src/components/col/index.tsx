import type { FC } from "react";
import type { ColProps, GridSize } from "./types";
import { View } from "react-native";
import PhaselisHOC from "../provider/lib/hoc";
import stylesheet from "./assets/styles";
import { useCombinedStyle } from "../../hooks";

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
    "default",
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
export type { GridSize };
