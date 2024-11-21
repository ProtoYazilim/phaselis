import { ComponentSize } from "@phaselis/types/base";
import { icons } from "lucide-react-native";
import React from "react";
import { StyleSheet } from "react-native";

const LucideIcon = ({
  name,
  size,
  style,
  width,
  height,
  strokeWidth,
  onClick,
}: {
  name?: keyof typeof icons;
  size?: ComponentSize;
  style?: any;
  width?: number;
  height?: number;
  strokeWidth?: number;
  onClick?: () => void;
}) => {
  // @ts-ignore
  // eslint-disable-next-line import/namespace
  const GenericIcon = icons[name];

  const combinedStyles = StyleSheet.flatten(style);

  const sizeLiteral = {
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 64,
  };

  const sizeStrokeWidthLiteral = {
    xxs: 4,
    xs: 2,
    sm: 2,
    md: 2,
    lg: 2,
    xl: 2,
    xxl: 2,
  };

  return (
    <GenericIcon
      style={combinedStyles}
      width={width ? width : sizeLiteral[size || "md"]}
      height={height ? height : sizeLiteral[size || "md"]}
      color={combinedStyles?.color}
      strokeWidth={
        strokeWidth ? strokeWidth : sizeStrokeWidthLiteral[size || "md"]
      }
      onPress={onClick}
    />
  );
};

export default LucideIcon;
