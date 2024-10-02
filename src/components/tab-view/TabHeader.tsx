import React, { useEffect, useRef, useState } from "react";
import {
  View,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

import { PhaselisHOC } from "@phaselis/components/provider";
import LucideIcon from "@phaselis/components/lucide-icon";
import { TabViewHeaderProps } from "./types";
import TabHeaderItem from "./TabHeaderItem";
import { tab_header_styles as stylesheet } from "./assets/styles";
import { useCombinedStyle } from "@phaselis/hooks";

const elementComponents = {
  view: View,
  scrollView: ScrollView,
};

const TabViewHeader = ({
  value = false,
  onChange,
  style,
  duration = 400,
  size = "md",
  showIcons,
  LeftSlot,
  RightSlot,
  contextValue,
  activeTab = 0,
  id = "",
  data,
  handleOnPress,
  scrollable = false,
  ...extraProps
}: TabViewHeaderProps) => {
  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.tab?.header,
    {
      scrollable,
      ...extraProps,
    },
  );

  const refLastScrollPosition = useRef<number>(0);
  const refScrollView = useRef<ScrollView>(null);
  const refScrollViewWidth = useRef<number>(0);

  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [itemWidths, setItemWidths] = useState<number[]>([]);
  const [scrollEnabled, setScrollEnabled] = useState<boolean>(scrollable);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentWidth = event.nativeEvent.contentSize.width;
    const scrollViewWidth = event.nativeEvent.layoutMeasurement.width;
    const scrollPosition = event.nativeEvent.contentOffset.x;
    setShowLeftArrow(scrollPosition > 0);
    setShowRightArrow(scrollPosition < contentWidth - scrollViewWidth);
    const currentX = event.nativeEvent.contentOffset.x;
    refLastScrollPosition.current = currentX;
  };

  useEffect(() => {
    const scrollToPosition = itemWidths
      .slice(0, activeTab)
      .reduce((acc, width) => acc + width, 0);
    refScrollView.current?.scrollTo?.({
      x: scrollToPosition,
      animated: true,
    });
  }, [activeTab, itemWidths, itemWidths.length]);

  const handleOnLayout = (event: any, index: number) => {
    const { width } = event.nativeEvent.layout;
    setItemWidths((prevWidths) => {
      const newWidths = [...prevWidths];
      newWidths[index] = width;
      return newWidths;
    });
    if (data.length === index + 1 && scrollable) {
      const totalWidth = itemWidths.reduce((acc, width) => acc + width, 0);
      if (totalWidth > refScrollViewWidth.current) {
        setScrollEnabled(true);
      } else {
        setScrollEnabled(false);
      }
    }
  };

  const ElementComponent = scrollable
    ? elementComponents.scrollView
    : elementComponents.view;

  const renderLeftScrollIcon = () => {
    if (showLeftArrow) {
      return (
        <LucideIcon
          name="ChevronLeft"
          onClick={() => {
            refScrollView.current?.scrollTo?.({
              x: refLastScrollPosition.current - 100,
              animated: true,
            });
          }}
        />
      );
    }
    return <View style={{ width: 16 }} />;
  };

  const renderRightScrollIcon = () => {
    if (showRightArrow) {
      return (
        <LucideIcon
          name="ChevronRight"
          onClick={() => {
            refScrollView.current?.scrollTo?.({
              x: refLastScrollPosition.current + 100,
              animated: true,
            });
          }}
        />
      );
    }
    return <View style={{ width: 16 }} />;
  };

  return (
    <View style={getCombinedStyle("container")}>
      {scrollEnabled && renderLeftScrollIcon()}
      <ElementComponent
        horizontal
        style={getCombinedStyle("element")}
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator={false}
        ref={refScrollView}
        onScroll={handleScroll}
        scrollEnabled={scrollEnabled}
        onLayout={(event) => {
          const { width } = event.nativeEvent.layout;
          refScrollViewWidth.current = width;
        }}
        key={`${data.length}-${id}-tab-view`}
      >
        {data.map((item, index) => {
          return (
            <TabHeaderItem
              activeTabIndex={activeTab}
              handleOnPress={handleOnPress}
              handleOnLayout={handleOnLayout}
              item={item}
              index={index}
              key={index}
              scrollable={scrollEnabled}
            />
          );
        })}
      </ElementComponent>
      {scrollEnabled && renderRightScrollIcon()}
    </View>
  );
};

export default PhaselisHOC<TabViewHeaderProps, any>(TabViewHeader);
