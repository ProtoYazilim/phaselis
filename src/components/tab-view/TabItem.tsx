import { PhaselisHOC } from "src/components/provider";
import { View } from "react-native";
import { TabItemProps } from "./types";
import { tab_item_styles as stylesheet } from "./assets/styles";
import { useCombinedStyle } from "src/hooks";

const TabItem = ({
  children,
  contextValue,
  style,
  variation = "default",
  ...extraProps
}: TabItemProps) => {
  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.tab[variation]?.tabItem,
    variation,
    {
      ...extraProps,
    },
  );

  return <View style={getCombinedStyle("container")}>{children}</View>;
};

TabItem.displayName = "TABITEM";

export default PhaselisHOC(TabItem);
