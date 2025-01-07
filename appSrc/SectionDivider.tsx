import React, { FC, ReactNode } from "react";
import { Colors, Spacings, Block } from "phaselis";
import { Text } from "react-native";

const SectionDivider: FC<{
  leftText: string;
  rightText: string;
  rightSlot?: ReactNode;
}> = ({ leftText, rightText, rightSlot }) => {
  return (
    <Block
      style={{
        borderBottomWidth: 1,
        borderBottomColor: Colors.Primary[300],
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: Spacings.SM,
        marginBottom: Spacings.SM,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          lineHeight: 18,
          color: Colors.Primary[300],
        }}
      >
        {leftText}
      </Text>
      {rightSlot ? (
        rightSlot
      ) : (
        <Text
          style={{
            fontSize: 14,
            color: Colors.Primary[300],
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
