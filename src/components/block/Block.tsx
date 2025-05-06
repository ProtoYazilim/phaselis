import type { ElementType, FC } from "react";
import type { BlockProps, Shadow } from "./types";
import { useMemo } from "react";
import { View, Animated } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import PhaselisHOC from "../provider/lib/hoc";
import useCombinedStyle from "../../hooks/useCombinedStyle";
import stylesheet from "./assets/styles";

const Block: FC<BlockProps> = (props) => {
  const { children, animated = false } = props;

  const { getCombinedStyle, getFlattenStyle } = useCombinedStyle(
    stylesheet,
    "block",
    "default",
    { ...(props as any) },
  );

  // Flatten and extract shadow + gradient from style
  const { shadows, lineerGradient } = useMemo(() => {
    const flatten = getFlattenStyle("self") || {};
    return {
      shadows: flatten.shadows || [],
      lineerGradient: flatten.lineerGradient || null,
    };
  }, [getFlattenStyle]);

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
  }, [animated, lineerGradient]) as ElementType;

  return (
    <WrapperComponent
      style={[getCombinedStyle("self"), boxShadowStyle]}
      {...(lineerGradient || {})}
      {...props}
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
