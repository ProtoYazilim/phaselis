import { icons } from "lucide-react-native";
import React, { FC, useMemo } from "react";
import { StyleSheet } from "react-native";
import { LucideIconProps } from "./types";

export const LucideIcon: FC<LucideIconProps> = ({
    name,
    size,
    style,
    width,
    height,
    strokeWidth,
    onClick,
    onPress,
}) => {
    // @ts-ignore
    // eslint-disable-next-line import/namespace
    const GenericIcon = icons[name];

    const combinedStyles = StyleSheet.flatten(style);

    const memorizedHeight = useMemo(() => {
        if (height) return height;
        if (combinedStyles?.height) return combinedStyles?.height;
        return sizeLiteral[size || "md"];
    }, [height, combinedStyles?.height, size]);

    const memorizedWidth = useMemo(() => {
        if (width) return width;
        if (combinedStyles?.width) return combinedStyles?.width;
        return sizeLiteral[size || "md"];
    }, [width, combinedStyles?.width, size]);

    return (
        <GenericIcon
            style={combinedStyles}
            width={memorizedWidth}
            height={memorizedHeight}
            color={combinedStyles?.color}
            strokeWidth={
                strokeWidth ? strokeWidth : sizeStrokeWidthLiteral[size || "md"]
            }
            onPress={onClick || onPress}
        />
    );
};

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
