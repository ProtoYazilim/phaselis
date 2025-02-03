import { View, Image as NativeImage, ImageBackground } from "react-native";
import type { ImageProps } from "./types";
import PhaselisHOC from "../provider/lib/hoc";
import stylesheet from "./assets/styles";
import { useCombinedStyle } from "../../hooks";

const Image = ({
  style,
  contextValue,
  background,
  children,
  variation = "default",
  ...imageNativeProps
}: ImageProps) => {
  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.image,
    variation,
    {
      background,
      ...imageNativeProps,
    },
  );

  const renderImage = () => {
    if (background) {
      return (
        <ImageBackground
          {...imageNativeProps}
          style={getCombinedStyle("element")}
        >
          {children}
        </ImageBackground>
      );
    }

    return (
      <NativeImage {...imageNativeProps} style={getCombinedStyle("element")} />
    );
  };

  return <View style={getCombinedStyle("container")}>{renderImage()}</View>;
};

export default PhaselisHOC(Image);
