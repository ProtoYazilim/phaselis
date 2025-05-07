import type { TabItemProps } from "./types";
import PhaselisHOC from "../provider/lib/hoc";
import { View } from "react-native";
import { tab_item_styles as stylesheet } from "./assets/styles";
import { useCombinedStyle } from "../../hooks";

const TabItem = (props: TabItemProps) => {
  const { children, variation } = props;
  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    "tab.tabItem",
    variation,
    { ...props },
  );

  return <View style={getCombinedStyle("container")}>{children}</View>;
};

TabItem.displayName = "TABITEM";

export default PhaselisHOC(TabItem);
