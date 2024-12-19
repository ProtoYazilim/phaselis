import React, { FC } from "react";
// import { Colors, Spacings } from "@phaselis/theme";
import { Block } from "@phaselis/components";
import SectionDivider from "./SectionDivider";
import { ViewStyle } from "react-native";

const StorySection: FC<{
  leftText?: string;
  rightText?: string;
  children: React.ReactNode;
  style?: ViewStyle;
}> = ({ leftText = "", rightText = "", children, style }) => {
  return (
    <Block>
      <SectionDivider leftText={leftText} rightText={rightText} />
      <Block style={style}>{children}</Block>
    </Block>
  );
};

export default StorySection;
