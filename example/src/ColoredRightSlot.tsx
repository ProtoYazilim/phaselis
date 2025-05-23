import type { FC } from "react";
import { type PhaselisColors, useColors } from "phaselis";
import { Text, View } from "react-native";

const ColoredRightSlot: FC<{
  text?: string;
}> = ({ text }) => {
  const Colors = useColors<PhaselisColors>();

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
