import { Image } from "phaselis";
import { Text, View } from "react-native";
import { phaselis_wood_image } from "../../../assets/logos";
import { BlurView } from "@react-native-community/blur";

function ImageBackgroundStory() {
  return (
    <Image background source={{ uri: phaselis_wood_image.uri }}>
      <View
        style={{
          padding: 64,
          alignItems: "center",
          borderRadius: 16,
          margin: 24,
        }}
      >
        <BlurView
          blurType="dark"
          blurAmount={5}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            borderRadius: 16,
          }}
        />
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
