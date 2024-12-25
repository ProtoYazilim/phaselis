import React, { FC } from "react";
import { Colors, Spacings, Block } from "phaselis";
import { Text } from "react-native";

const SectionDivider: FC<{
  leftText: string;
  rightText: string;
}> = ({ leftText, rightText }) => {
  return (
    <Block
      style={{
        borderBottomWidth: 1,
        borderBottomColor: Colors.Gray[300],
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
          color: Colors.Gray[300],
        }}
      >
        {leftText}
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: Colors.Gray[300],
          lineHeight: 18,
        }}
      >
        {rightText}
      </Text>
    </Block>
  );
};

export default SectionDivider;
