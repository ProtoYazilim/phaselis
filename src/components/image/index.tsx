import { View, Image as NativeImage, ImageBackground } from "react-native";
import type { FC } from "react";
import type { ImageProps } from "./types";
import PhaselisHOC from "../provider/lib/hoc";
import stylesheet from "./assets/styles";
import { useCombinedStyle } from "../../hooks";

const Image: FC<ImageProps> = (props) => {
  const { background, children, variation = "default" } = props;

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    "image",
    variation,
    {
      ...props,
      background,
    },
  );

  const renderImage = () => {
    if (background) {
      return (
        <ImageBackground {...props} style={getCombinedStyle("element", true)}>
          {children}
        </ImageBackground>
      );
    }

    return <NativeImage {...props} style={getCombinedStyle("element", true)} />;
  };

  return <View style={getCombinedStyle("container")}>{renderImage()}</View>;
};

export default PhaselisHOC(Image);
