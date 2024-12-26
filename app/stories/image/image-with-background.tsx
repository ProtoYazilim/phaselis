import { Image } from "phaselis";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { react_background_image } from "../assets";

function ImageBackgroundStory() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: react_background_image.uri }}
        resizeMode="cover"
        onLoad={() => {
          console.log("Proto header loaded");
        }}
        background
        style={{
          element: {
            justifyContent: "center",
          },
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 42,
            lineHeight: 84,
            fontWeight: "bold",
            textAlign: "center",
            backgroundColor: "#000000c0",
          }}
        >
          Phaselis
        </Text>
      </Image>
    </SafeAreaView>
  );
}

export default ImageBackgroundStory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    backgroundColor: "white",
  },
});
