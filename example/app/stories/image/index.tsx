import { Image } from "phaselis";
import { phaselis_avatar_image } from "../../../assets/logos";
import StoryView from "../../../src/StoryView";

function ImageStory() {
  return (
    <StoryView>
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
    </StoryView>
  );
}

export default ImageStory;
