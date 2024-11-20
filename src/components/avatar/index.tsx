import { FC } from "react";
import { AvatarProps } from "./types";
import stylesheet from "./assets/styles";
import { useCombinedStyle } from "@phaselis/hooks";
import { PhaselisHOC } from "@phaselis/components/provider";
import { View, Text, Image } from "react-native";
import { LucideIcon } from "@phaselis/components";

const sizeIconSizeLiteral = {
  xxs: 16,
  xs: 16,
  sm: 24,
  md: 32,
  lg: 64,
  xl: 128,
  xxl: 128,
};

const Avatar: FC<AvatarProps> = ({
  id,
  children,
  style,
  iconName,
  disabled,
  size = "md",
  circle,
  rounded,
  square,
  contextValue,
  img,
  text,
  ...extraProps
}) => {
  if (!circle && !rounded && !square) {
    circle = true;
  }

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.avatar,
    {
      size,
      circle: circle ? size : undefined,
      rounded: rounded ? size : undefined,
      square: square ? size : undefined,
      ...extraProps,
    } as any,
  );

  const renderHelper = () => {
    if (children) {
      return children;
    }
    if (text) {
      return <Text style={getCombinedStyle("text")}>{text}</Text>;
    }
    if (img) {
      return <Image style={getCombinedStyle("image")} source={{ uri: img }} />;
    }
    if (iconName) {
      return (
        <LucideIcon
          style={getCombinedStyle("icon")}
          name={iconName}
          width={sizeIconSizeLiteral[size]}
          height={sizeIconSizeLiteral[size]}
        />
      );
    }
  };

  return <View style={getCombinedStyle("container")}>{renderHelper()}</View>;
};

Avatar.displayName = "avatar";

export default PhaselisHOC<AvatarProps, any>(Avatar);
