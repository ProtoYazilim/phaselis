import type { FC } from "react";
import type { BlockProps, Shadow } from "./types";
import { useMemo } from "react";
import { View, Animated } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import PhaselisHOC from "../provider/lib/hoc";

const Block: FC<BlockProps> = ({
  style,
  children,
  animated = false,
  ...extraProps
}) => {
  // Flatten and extract shadow + gradient from style
  const { flattenStyle, shadows, lineerGradient } = useMemo(() => {
    const flatten = Array.isArray(style)
      ? Object.assign({}, ...style)
      : style || {};
    return {
      flattenStyle: style,
      shadows: flatten.shadows || [],
      lineerGradient: flatten.lineerGradient || null,
    };
  }, [style]);

  // Build boxShadow value if shadows exist
  const boxShadowStyle = useMemo(() => {
    if (!shadows || shadows.length === 0) return {};
    const boxShadowValue = shadows
      .map((shadow: Shadow) => {
        const { offset, radius, color, opacity } = shadow;
        return `${offset?.width || 0}px ${offset?.height || 0}px ${radius || 0}px rgba(${hexToRgb(
          color || "#000",
        )}, ${opacity ?? 0.5})`;
      })
      .join(", ");

    return {
      boxShadow: boxShadowValue,
    };
  }, [shadows]);

  const WrapperComponent = useMemo(() => {
    if (lineerGradient) return LinearGradient;
    return animated ? Animated.View : View;
  }, [animated, lineerGradient]) as React.ElementType;

  const combinedStyle = useMemo(() => {
    const baseStyle = Array.isArray(style) ? [...style] : [style];
    return [...baseStyle, boxShadowStyle];
  }, [style, boxShadowStyle]);

  return (
    <WrapperComponent
      style={combinedStyle}
      {...(lineerGradient || {})}
      {...extraProps}
    >
      {children}
    </WrapperComponent>
  );
};

Block.displayName = "Block";

export default PhaselisHOC(Block);

// HEX to RGB helper
function hexToRgb(hex: string): string {
  let value = hex.replace("#", "");
  if (value.length === 3) {
    value = value
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const bigint = parseInt(value, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}
