import type { TabViewProps } from "./types";
import { Children, useMemo, useState } from "react";
import { View } from "react-native";
import PhaselisHOC from "../provider/lib/hoc";
import TabHeader from "./TabHeader";
import { tab_view_styles as stylesheet } from "./assets/styles";
import { useCombinedStyle } from "../../hooks";

const TabView = (props: TabViewProps) => {
  const { children, headerProps, activeTab = 0, scrollable, variation } = props;
  const [activeTabIndex, setActiveTabIndex] = useState(activeTab);

  const data = useMemo(() => {
    return Children.map(children, (item: any, _index: any) => {
      if (item && item.type && item.type.displayName === "TABITEM") {
        return {
          text: item.props.title,
          leftIcon: item.props.leftIcon,
          rightIcon: item.props.rightIcon,
        };
      }
    });
  }, [children]);

  const handleOnPress = (index: number) => {
    setActiveTabIndex(index);
  };

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    "tab.view",
    variation,
    {
      ...props,
    },
  );

  return (
    <View style={getCombinedStyle("container")}>
      <TabHeader
        id="tabHeader"
        data={data}
        activeTab={activeTabIndex}
        handleOnPress={handleOnPress}
        scrollable={scrollable}
        {...headerProps}
      />
      <View style={getCombinedStyle("element", true)}>
        {Children.map(children, (child, index) => {
          if (child && child.type && child.type.displayName === "TABITEM") {
            if (activeTabIndex === index) {
              return child;
            }
          }
        })}
      </View>
    </View>
  );
};

export default PhaselisHOC(TabView);
