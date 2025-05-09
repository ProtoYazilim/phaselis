import type { FC } from "react";
import type { AvatarProps } from "./types";
import stylesheet from "./assets/styles";
import { View, Text, Image } from "react-native";
import LucideIcon from "../lucide-icon";
import PhaselisHOC from "../provider/lib/hoc";
import { useCombinedStyle } from "../../hooks";

const sizeIconSizeLiteral = {
  xxs: 16,
  xs: 16,
  sm: 24,
  md: 32,
  lg: 64,
  xl: 128,
  xxl: 128,
};

const Avatar: FC<AvatarProps> = (props) => {
  const {
    children,
    iconName,
    size = "md",
    variation = "default",
    img,
    text,
  } = props;

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    "avatar",
    variation,
    {
      ...props,
      size: size,
    },
  );

  const renderHelper = () => {
    if (children) {
      return children;
    }
    if (text) {
      return <Text style={getCombinedStyle("text", true)}>{text}</Text>;
    }
    if (img) {
      return (
        <Image style={getCombinedStyle("image", true)} source={{ uri: img }} />
      );
    }
    if (iconName) {
      return (
        <LucideIcon
          style={getCombinedStyle("icon", true)}
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

Avatar.displayName = "Avatar";
