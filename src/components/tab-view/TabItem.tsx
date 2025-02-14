import type { TabItemProps } from "./types";
import PhaselisHOC from "../provider/lib/hoc";
import { View } from "react-native";
import { tab_item_styles as stylesheet } from "./assets/styles";
import { useCombinedStyle } from "../../hooks";

const TabItem = ({
  children,
  contextValue,
  style,
  variation = "default",
}: TabItemProps) => {
  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.tab[variation]?.tabItem,
    variation,
  );

  return <View style={getCombinedStyle("container")}>{children}</View>;
};

TabItem.displayName = "TABITEM";

export default PhaselisHOC(TabItem);
