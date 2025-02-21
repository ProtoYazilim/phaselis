import { Image, useColors, type PhaselisColors } from "phaselis";
import { SafeAreaView } from "react-native";
import { phaselis_avatar_image } from "../assets";

function ImageStory() {
  const Colors = useColors<PhaselisColors>();

  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.Shades.white,
        flex: 1,
        margin: 24,
      }}
    >
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
