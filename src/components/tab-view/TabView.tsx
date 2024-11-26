import React, { Children, useMemo, useState } from "react";
import { View } from "react-native";
import { PhaselisHOC } from "@phaselis/components/provider";
import { TabViewProps } from "./types";
import TabHeader from "./TabHeader";
import { tab_view_styles as stylesheet } from "./assets/styles";
import { useCombinedStyle } from "@phaselis/hooks";

const TabView = ({
  children,
  headerProps,
  activeTab,
  scrollable,
  contextValue,
  style,
  ...extraProps
}: TabViewProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState(activeTab);

  const data = useMemo(() => {
    return Children.map(children, (item: any, index: any) => {
      if (item && item.type && item.type.displayName === "TABITEM") {
        return {
          text: item.props.title,
        };
      }
    });
  }, [children]);

  const handleOnPress = (index: number) => {
    setActiveTabIndex(index);
  };

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.tab?.view,
    {
      ...extraProps,
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
      <View style={getCombinedStyle("element")}>
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

export default PhaselisHOC<TabViewProps>(TabView);
