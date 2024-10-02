import React, { useMemo } from "react";
import { Pressable, Text } from "react-native";

import { PhaselisHOC } from "@phaselis/components/provider";
import { TabHeaderItemProps } from "./types";
import { Slot } from "@phaselis/components";
import { tab_header_item_styles as stylesheet } from "./assets/styles";
import { useCombinedStyle } from "@phaselis/hooks";

const TabHeaderItem = ({
  activeTabIndex,
  index,
  item,
  handleOnLayout,
  handleOnPress,
  RightSlot,
  LeftSlot,
  leftIcon,
  rightIcon,
  scrollable,
  style,
  contextValue,
  ...extraProps
}: TabHeaderItemProps) => {
  const active = useMemo(
    () => activeTabIndex === index,
    [activeTabIndex, index],
  );

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.tab?.headerItem,
    {
      scrollable,
      active,
      ...extraProps,
    },
  );

  return (
    <Pressable
      key={index}
      style={getCombinedStyle("container")}
      onLayout={(event) => handleOnLayout?.(event, index)}
      onPress={() => {
        handleOnPress(index);
      }}
    >
      <Slot style={getCombinedStyle("leftSlot")} icon={leftIcon}>
        {LeftSlot && <LeftSlot />}
      </Slot>
      <Text style={getCombinedStyle("text")}>{item.text}</Text>
      <Slot style={getCombinedStyle("rightSlot")} icon={rightIcon}>
        {RightSlot && <RightSlot />}
      </Slot>
    </Pressable>
  );
};

export default PhaselisHOC<TabHeaderItemProps, any>(TabHeaderItem);
