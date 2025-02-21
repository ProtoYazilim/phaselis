import type { FC, ReactNode } from "react";
import { Spacings, Block, useColors, type PhaselisColors } from "phaselis";
import { Text } from "react-native";

const SectionDivider: FC<{
  leftText: string;
  leftTextColor?: string;
  rightText: string;
  rightSlot?: ReactNode;
  noHeight?: boolean;
}> = ({
  leftText,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  rightText,
  rightSlot,
  leftTextColor,
}) => {
  const Colors = useColors<PhaselisColors>();
  const insideLeftTextColor = leftTextColor || Colors.Primary[300];

  return (
    <Block
      style={{
        borderBottomWidth: 1,
        borderBottomColor: insideLeftTextColor,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: leftText || rightSlot ? Spacings.SM : 0,
        marginBottom: leftText || rightSlot ? Spacings.MD : 0,
      }}
    >
      {leftText && (
        <Text
          style={{
            fontSize: 18,
            lineHeight: 18,
            color: insideLeftTextColor,
          }}
        >
          {leftText}
        </Text>
      )}
      {/* {rightSlot
        ? rightSlot
        : rightText && (
            <Text
              style={{
                fontSize: 14,
                color: leftTextColor,
                lineHeight: 18,
              }}
            >
              {rightText}
            </Text>
          )} */}
    </Block>
  );
};

export default SectionDivider;
