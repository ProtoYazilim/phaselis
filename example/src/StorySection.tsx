import type { FC, ReactNode } from "react";
import type { ExtendedViewStyle } from "phaselis";
import { Block } from "phaselis";
import SectionDivider from "./SectionDivider";
import type { ViewProps } from "react-native";

const StorySection: FC<{
  leftText?: string;
  leftTextColor?: string;
  rightText?: string;
  rightSlot?: ReactNode;
  children: ReactNode;
  style?: ExtendedViewStyle;
  containerProps?: ViewProps;
}> = ({
  leftText = "",
  rightText = "",
  rightSlot = undefined,
  leftTextColor,
  children,
  style,
  containerProps = {},
}) => {
  return (
    <Block
      {...{
        ...containerProps,
        style: containerProps.style as ExtendedViewStyle,
      }}
    >
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
