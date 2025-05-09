import type { FC } from "react";
import type { ColProps, GridSize } from "./types";
import { View } from "react-native";
import PhaselisHOC from "../provider/lib/hoc";
import stylesheet from "./assets/styles";
import { useCombinedStyle } from "../../hooks";

const Col: FC<ColProps> = (props) => {
  const { size, children, offset } = props;

  const { getCombinedStyle } = useCombinedStyle(stylesheet, "col", "default", {
    ...props,
    size: size,
    offset: offset,
  });

  return (
    <>
      {offset ? <View style={getCombinedStyle("offset")} /> : null}
      <View style={getCombinedStyle("self", true)}>{children}</View>
    </>
  );
};

Col.displayName = "Column";

export default PhaselisHOC<ColProps, ColExtraProps>(Col);
export type { GridSize };
