import { FC } from "react";
import { AvatarProps } from "./types";
import stylesheet from "./assets/styles";
import { View, Text, Image } from "react-native";
import LucideIcon from "../lucide-icon";
import { PhaselisHOC } from "src/components/provider";
import useCombinedStyle from "src/hooks/useCombinedStyle";

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
  children,
  style,
  iconName,
  size = "md",
  variation = "default",
  contextValue,
  img,
  text,
  ...extraProps
}) => {
  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.avatar,
    variation,
    {
      size,
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

export default PhaselisHOC(Avatar);

Avatar.displayName = "avatar";
