import React from "react";
import { View, Image as NativeImage, ImageBackground } from "react-native";

import { ImageProps } from "./types";
import { PhaselisHOC } from "src/components/provider";
import stylesheet from "./assets/styles";
import { useCombinedStyle } from "src/hooks";

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
