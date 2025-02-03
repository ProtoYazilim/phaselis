import type { FC, ReactNode } from "react";
import type { ExtendedViewStyle } from "phaselis";
import { Block } from "phaselis";
import SectionDivider from "./SectionDivider";

const StorySection: FC<{
  leftText?: string;
  leftTextColor?: string;
  rightText?: string;
  rightSlot?: ReactNode;
  children: ReactNode;
  style?: ExtendedViewStyle;
}> = ({
  leftText = "",
  rightText = "",
  rightSlot = undefined,
  leftTextColor,
  children,
  style,
}) => {
  return (
    <Block>
      <SectionDivider
        leftText={leftText}
        leftTextColor={leftTextColor}
        rightText={rightText}
        rightSlot={rightSlot}
      />
      <Block style={style}>{children}</Block>
    </Block>
  );
};

export default StorySection;
