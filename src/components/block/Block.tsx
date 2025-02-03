import type { FC } from "react";
import type { BlockProps } from "./types";
import { useMemo } from "react";
import { View } from "react-native";
import PhaselisHOC from "../provider/lib/hoc";
import LinearGradient from "react-native-linear-gradient";
import { ShadowedView, shadowStyle } from "react-native-fast-shadow";

const Block: FC<BlockProps> = ({ style, children, ...extraProps }) => {
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
          style={[
            shadowStyle({
              color: shadow.color,
              opacity: shadow.opacity,
              radius: shadow.radius,
              offset: shadow.offset,
            }),
            { alignSelf: "flex-start" },
          ]}
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

export default PhaselisHOC(Block);
