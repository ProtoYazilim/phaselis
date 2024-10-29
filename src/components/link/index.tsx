import React, { FC } from "react";
import { Pressable, Text } from "react-native";
import { PhaselisHOC } from "@phaselis/components/provider";
import stylesheet from "./assets/styles";
import { LinkProps } from "./types";
import { Slot } from "@phaselis/components";
import { useCombinedStyle } from "@phaselis/hooks";

const Link: FC<LinkProps> = ({
  contextValue,
  style,
  disabled,
  text,
  href,
  mode = "push",
  leftIcon,
  LeftSlot,
  rightIcon,
  RightSlot,
  primary,
  secondary,
  ...extraProps
}) => {
  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.link,
    {
      disabled,
      primary,
      secondary,
      ...extraProps,
    },
  );

  return (
    <Pressable
      style={getCombinedStyle("container")}
      onPress={() => {
        if (disabled) return;
      }}
    >
      <Slot style={getCombinedStyle("leftSlot")} icon={leftIcon} size="md">
        {LeftSlot && <LeftSlot />}
      </Slot>
      <Text style={getCombinedStyle("text")}>{text}</Text>
      <Slot style={getCombinedStyle("rightSlot")} icon={rightIcon} size="md">
        {RightSlot && <RightSlot />}
      </Slot>
    </Pressable>
  );
};

Link.displayName = "Link";

export default PhaselisHOC<LinkProps, LinkExtraProps>(Link);
