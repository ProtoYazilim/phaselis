import React, { FC } from "react";
import Color from "color";
import { View, Text, FlatList, StyleSheet } from "react-native";

const ColorView: FC<{
  ColorArr: [string, string][];
}> = ({ ColorArr }) => {
  const renderColorItem = ({ item }: { item: [string, string] }) => {
    const color = Color(item[1]);
    const lightness = color.lightness();

    const newColor = color
      .lightness(
        lightness > 49
          ? 50 - lightness + (lightness - 50) * 0.5
          : 1000 - lightness,
      )
      .saturate(10)
      .hex();

    return (
      <View style={[styles.colorItem, { backgroundColor: item[1] }]}>
        <Text style={[styles.colorText, { color: newColor }]}>
          {`${item[0]}`}
        </Text>
        <Text style={[styles.colorHex, { color: newColor }]}>{item[1]}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={ColorArr}
      keyExtractor={(item) => item[0]}
      renderItem={renderColorItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  colorItem: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    borderRadius: 8,
  },
  colorText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  colorHex: {
    fontSize: 12,
  },
});

export default ColorView;
