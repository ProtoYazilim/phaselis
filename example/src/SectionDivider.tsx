import type { FC, ReactNode } from "react";
import { Colors, Spacings, Block } from "phaselis";
import { Text } from "react-native";

const SectionDivider: FC<{
  leftText: string;
  leftTextColor?: string;
  rightText: string;
  rightSlot?: ReactNode;
  noHeight?: boolean;
}> = ({
  leftText,
  rightText,
  rightSlot,
  leftTextColor = Colors.Primary[300],
}) => {
  return (
    <Block
      style={{
        borderBottomWidth: 1,
        borderBottomColor: leftTextColor,
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
            color: leftTextColor,
          }}
        >
          {leftText}
        </Text>
      )}
      {rightSlot
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
          )}
    </Block>
  );
};

export default SectionDivider;
