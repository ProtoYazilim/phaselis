import { Image } from "phaselis";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { phaselis_avatar_image } from "../assets";

function ImageStory() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: phaselis_avatar_image.uri }}
        width={(phaselis_avatar_image.width ?? 0) * 0.9}
        height={(phaselis_avatar_image.height ?? 0) * 0.9}
        resizeMode="cover"
        style={{
          container: {
            alignItems: "center",
          },
        }}
      />
    </SafeAreaView>
  );
}

export default ImageStory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
    backgroundColor: "white",
  },
});
