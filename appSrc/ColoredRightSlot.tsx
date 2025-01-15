import React, { FC } from "react";
import { Colors } from "phaselis";
import { Text, View } from "react-native";

const ColoredRightSlot: FC<{
  text?: string;
}> = ({ text }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text
        style={{
          color: Colors.Primary[300],
        }}
      >
        {text}Primary{" "}
      </Text>
      <Text
        style={{
          color: Colors.Secondary[300],
        }}
      >
        Secondary{" "}
      </Text>
      <Text
        style={{
          color: Colors.Tertiary[300],
        }}
      >
        Tertiary
      </Text>
    </View>
  );
};

export default ColoredRightSlot;
