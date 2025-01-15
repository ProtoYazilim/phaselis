import React, { FC, ReactNode } from "react";
import { Block } from "phaselis";
import SectionDivider from "./SectionDivider";
import { ViewStyle } from "react-native";

const StorySection: FC<{
  leftText?: string;
  rightText?: string;
  rightSlot?: ReactNode;
  children: ReactNode;
  style?: ViewStyle;
}> = ({
  leftText = "",
  rightText = "",
  rightSlot = undefined,
  children,
  style,
}) => {
  return (
    <Block>
      <SectionDivider
        leftText={leftText}
        rightText={rightText}
        rightSlot={rightSlot}
      />
      <Block style={style}>{children}</Block>
    </Block>
  );
};

export default StorySection;
