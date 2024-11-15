import React, { FC, useMemo } from "react";
import { View } from "react-native";
import { PhaselisHOC } from "@phaselis/components/provider";
import { BlockProps } from "./types";
import LinearGradient from "react-native-linear-gradient";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";

const Block: FC<BlockProps> = ({
  contextValue,
  style,
  children,
  ...extraProps
}) => {
  const shadows = useMemo(() => {
    if (Array.isArray(style)) {
      return style
        .map((s) => s.shadows)
        .flat()
        .filter(Boolean); // undefined/null shadow'ları filtrele
    } else return style?.shadows || []; // shadow'lar undefined ise boş bir dizi döndür
  }, [style]);

  // Helper function to render nested ShadowedViews
  const renderShadows = (child: React.ReactNode) => {
    if (!shadows || shadows.length === 0) return child;

    return shadows.reduceRight((acc, shadow) => {
      return (
        <ShadowedView
          style={shadowStyle({
            color: shadow.color,
            opacity: shadow.opacity,
            radius: shadow.radius,
            offset: shadow.offset,
          })}
        >
          {acc}
        </ShadowedView>
      );
    }, child);
  };

  const isLinearGradient = !!style?.lineerGradient;

  const WrapperComponent = isLinearGradient ? LinearGradient : View;

  const gradientProps = isLinearGradient
    ? {
        ...style.lineerGradient,
      }
    : {};

  return renderShadows(
    <WrapperComponent style={style} {...(gradientProps as any)} {...extraProps}>
      {children}
    </WrapperComponent>,
  );
};

Block.displayName = "Block";

export default PhaselisHOC<BlockProps, BlockExtraProps>(Block);
