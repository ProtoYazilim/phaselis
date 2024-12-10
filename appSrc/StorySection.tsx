import React, { FC } from "react";
// import { Colors, Spacings } from "@phaselis/theme";
import { Block } from "@phaselis/components";
import SectionDivider from "./SectionDivider";

const StorySection: FC<{
  leftText?: string;
  rightText?: string;
  children: React.ReactNode;
}> = ({ leftText = "", rightText = "", children }) => {
  return (
    <Block>
      <SectionDivider leftText={leftText} rightText={rightText} />
      {children}
    </Block>
  );
};

export default StorySection;
