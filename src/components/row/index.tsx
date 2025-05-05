import type { FC } from "react";
import type { RowProps } from "./types";
import { View } from "react-native";
import PhaselisHOC from "../provider/lib/hoc";
import stylesheet from "./assets/styles";
import { useCombinedStyle } from "../../hooks";

const Row: FC<RowProps> = (props) => {
  const { children, ...extraProps } = props;
  const { getCombinedStyle } = useCombinedStyle(stylesheet, "row", "default", {
    ...extraProps,
  });

  return <View style={getCombinedStyle("self", true)}>{children}</View>;
};

Row.displayName = "Row";

export default PhaselisHOC(Row);
