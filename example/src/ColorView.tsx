import type { FC } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import { useColors, type PhaselisColors } from "phaselis";

import StorySection from "./StorySection";

const ColorView: FC<{
  name: string;
}> = ({ name }) => {
  const Colors = useColors<PhaselisColors>();
  type ColorKeys = keyof typeof Colors;

  const renderColorItem = ({ item }: { item: [string, string] }) => {
    return (
      <View>
        <View
          style={{
            backgroundColor: item[1],
            height: 30,
            width: (Dimensions.get("screen").width - 32) / 11,
          }}
        />
        <Text
          style={{
            color:
              typeof Colors[name as ColorKeys] === "object"
                ? (Colors[name as ColorKeys] as { [key: string]: string })[600]
                : undefined,
            textAlign: "center",
            fontSize: 11,
            fontWeight: 400,
            lineHeight: 18,
          }}
        >
          {item[0]}
        </Text>
      </View>
    );
  };

  return (
    <StorySection
      leftText={name}
      leftTextColor={
        typeof Colors[name as ColorKeys] === "object"
          ? (Colors[name as ColorKeys] as { [key: string]: string })[500]
          : undefined
      }
    >
      <FlatList
        data={Object.entries(Colors[name as ColorKeys])}
        keyExtractor={(item) => item[0]}
        renderItem={renderColorItem}
        horizontal={true}
      />
    </StorySection>
  );
};

export default ColorView;
