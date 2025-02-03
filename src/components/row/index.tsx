import type { FC } from "react";
import type { RowProps } from "./types";
import { View } from "react-native";
import PhaselisHOC from "../provider/lib/hoc";
import stylesheet from "./assets/styles";
import { useCombinedStyle } from "../../hooks";

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
    "default",
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
