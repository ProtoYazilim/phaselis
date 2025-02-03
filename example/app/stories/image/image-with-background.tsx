import { Image } from "phaselis";
import { Text, View } from "react-native";

import { phaselis_wood_image } from "../assets";

function ImageBackgroundStory() {
  return (
    <Image background source={{ uri: phaselis_wood_image.uri }}>
      <View
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: 64,
          alignItems: "center",
          borderRadius: 16,
          margin: 24,
        }}
      >
        <Text style={{ color: "white", fontSize: 22, lineHeight: 26 }}>
          Image Background
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: 700,
            lineHeight: 20,
          }}
        >
          Center Text
        </Text>
        <Text
          style={{
            color: "white",
            lineHeight: 18,
          }}
        >
          Blur Background XXL
        </Text>
      </View>
    </Image>
  );
}

export default ImageBackgroundStory;
