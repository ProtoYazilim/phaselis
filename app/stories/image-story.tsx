import { Image } from "@phaselis/components";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { git_logo_image, proto_header_image } from "./assets";

function ImageStory() {
  console.log(proto_header_image.width);
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: proto_header_image.uri }}
        height={proto_header_image.height || 0}
        resizeMode="repeat"
        onLoad={() => {
          console.log("Proto header loaded");
        }}
        style={{
          container: {
            margin: 10,
          },
        }}
      />
      <Image
        source={{ uri: git_logo_image.uri }}
        width={git_logo_image.width || 0}
        height={git_logo_image.height || 0}
        resizeMode="cover"
        style={{
          container: {
            alignItems: "center",
          },
        }}
        onLoad={() => {
          console.log("Git Logo loaded");
        }}
        onError={() => {
          console.log("Error loading Git Logo");
        }}
      />
    </SafeAreaView>
  );
}

export default ImageStory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    backgroundColor: "white",
  },
});
