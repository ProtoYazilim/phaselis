import type { TabHeaderItemProps } from "./types";
import { useMemo } from "react";
import { Pressable, Text } from "react-native";
import PhaselisHOC from "../provider/lib/hoc";
import { Slot } from "../index";
import { tab_header_item_styles as stylesheet } from "./assets/styles";
import { useCombinedStyle } from "../../hooks";

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
  variation = "default",
  ...extraProps
}: TabHeaderItemProps) => {
  const active = useMemo(
    () => activeTabIndex === index,
    [activeTabIndex, index],
  );

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.tab[variation]?.headerItem,
    variation,
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
        handleOnPress?.(index);
      }}
    >
      <Slot
        style={getCombinedStyle("leftSlot")}
        icon={item?.leftIcon || leftIcon}
      >
        {LeftSlot && <LeftSlot />}
      </Slot>
      <Text style={getCombinedStyle("text")}>{item.text}</Text>
      <Slot
        style={getCombinedStyle("rightSlot")}
        icon={item?.rightIcon || rightIcon}
      >
        {RightSlot && <RightSlot />}
      </Slot>
    </Pressable>
  );
};

export default PhaselisHOC(TabHeaderItem);
