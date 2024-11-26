import { PhaselisHOC } from "@phaselis/components/provider";
import { View } from "react-native";
import { TabItemProps } from "./types";
import { tab_item_styles as stylesheet } from "./assets/styles";
import { useCombinedStyle } from "@phaselis/hooks";

const TabItem = ({
  children,
  contextValue,
  style,
  title,
  ...extraProps
}: TabItemProps) => {
  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.tab?.tabItem,
    {
      ...extraProps,
    },
  );

  return <View style={getCombinedStyle("container")}>{children}</View>;
};

TabItem.displayName = "TABITEM";

export default PhaselisHOC<TabItemProps, any>(TabItem);
