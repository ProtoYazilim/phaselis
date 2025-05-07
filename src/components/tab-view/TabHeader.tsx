import type { TabViewHeaderProps } from "./types";
import type { NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { useEffect, useRef, useState } from "react";
import { View, ScrollView } from "react-native";
import PhaselisHOC from "../provider/lib/hoc";
import { Slot } from "../index";
import TabHeaderItem from "./TabHeaderItem";
import { tab_header_styles as stylesheet } from "./assets/styles";
import { useCombinedStyle } from "../../hooks";

const elementComponents = {
  view: View,
  scrollView: ScrollView,
};

const TabViewHeader = (props: TabViewHeaderProps) => {
  const {
    activeTab = 0,
    id = "",
    data,
    handleOnPress,
    scrollable = false,
    variation,
    leftIcon = "ChevronLeft",
    rightIcon = "ChevronRight",
    LeftSlot,
    RightSlot,
  } = props;
  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    "tab.header",
    variation,
    {
      ...props,
      scrollable,
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
    if (data?.length === index + 1 && scrollable) {
      const totalWidth = itemWidths.reduce(
        (acc, itemWidth) => acc + itemWidth,
        0,
      );
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
        <Slot
          icon={leftIcon}
          style={getCombinedStyle("leftSlot")}
          onClick={() => {
            refScrollView.current?.scrollTo?.({
              x: refLastScrollPosition.current - 100,
              animated: true,
            });
          }}
        >
          {LeftSlot && <LeftSlot />}
        </Slot>
      );
    }
    return <View style={{ width: 24 }} />;
  };

  const renderRightScrollIcon = () => {
    if (showRightArrow) {
      return (
        <Slot
          icon={rightIcon}
          style={getCombinedStyle("rightSlot")}
          onClick={() => {
            refScrollView.current?.scrollTo?.({
              x: refLastScrollPosition.current + 100,
              animated: true,
            });
          }}
        >
          {RightSlot && <RightSlot />}
        </Slot>
      );
    }
    return <View style={{ width: 24 }} />;
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
        key={`${data?.length}-${id}-tab-view`}
      >
        {data?.map((item, index) => {
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

export default PhaselisHOC(TabViewHeader);
