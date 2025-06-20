import type { FC } from "react";
import type { BlockProps } from "./types";
import { useMemo, useRef } from "react";
import { View, Animated, StyleSheet } from "react-native";
import PhaselisHOC from "../provider/lib/hoc";
import LinearGradient from "react-native-linear-gradient";

const Block: FC<BlockProps> = ({
  style,
  children,
  animated = false,
  ...extraProps
}) => {
  // Memoize flattened style to avoid recalculation
  const flattenedStyle = useMemo(() => StyleSheet.flatten(style), [style]);
  const backgroundColor = (flattenedStyle as any)?.backgroundColor;
  const background = (flattenedStyle as any)?.background;

  const isLinearGradient = useMemo(() => {
    return (
      typeof background === "string" && background.includes("linear-gradient")
    );
  }, [background]);

  const gradientSource = useMemo(() => {
    if (
      typeof background === "string" &&
      background.includes("linear-gradient")
    ) {
      return background;
    }
    return null;
  }, [background]);

  // Lock component type once it becomes LinearGradient
  const componentTypeRef = useRef<React.ElementType | null>(null);

  const WrapperComponent = useMemo(() => {
    // If we already locked to LinearGradient, keep it
    if (componentTypeRef.current === LinearGradient) {
      return LinearGradient;
    }

    // If current state is LinearGradient, lock it
    if (isLinearGradient) {
      componentTypeRef.current = LinearGradient;
      return LinearGradient;
    }

    // Otherwise use normal View/Animated.View
    const component = animated ? Animated.View : View;
    componentTypeRef.current = component;
    return component;
  }, [isLinearGradient, animated]) as React.ElementType;

  // Memoize final style calculation
  const finalStyle = useMemo(() => {
    if (isLinearGradient) {
      // remove background from style if it contains linear gradients
      const { background: _linearBackground, ...rest } = flattenedStyle as any;
      return rest;
    }
    return style;
  }, [isLinearGradient, flattenedStyle, style]);

  const gradientProps = useMemo(() => {
    // If component is locked to LinearGradient, always provide valid props
    if (componentTypeRef.current === LinearGradient) {
      if (isLinearGradient && gradientSource) {
        const parsed = parseLinearGradient(gradientSource);
        if (parsed) {
          return {
            colors: parsed.colors,
            locations: parsed.locations,
            start: parsed.start,
            end: parsed.end,
          };
        }
      }
      // Fallback for locked LinearGradient component
      return {
        colors: [backgroundColor || "#ffffff", backgroundColor || "#ffffff"],
        start: { x: 0, y: 0 },
        end: { x: 1, y: 1 },
      };
    }

    // Normal gradient parsing for non-locked components
    if (isLinearGradient && gradientSource) {
      const parsed = parseLinearGradient(gradientSource);
      if (!parsed) {
        console.warn(`Failed to parse linear gradient: ${gradientSource}`);
        // Fallback to a default gradient if parsing fails
        return {
          colors: [backgroundColor || "#ffffff", backgroundColor || "#ffffff"],
          start: { x: 0, y: 0 },
          end: { x: 1, y: 1 },
        };
      }
      return {
        colors: parsed.colors,
        locations: parsed.locations,
        start: parsed.start,
        end: parsed.end,
      };
    }

    // Default props for non-gradient cases
    return {
      colors: [backgroundColor || "#ffffff", backgroundColor || "#ffffff"], // Solid color fallback
      start: { x: 0, y: 0 },
      end: { x: 1, y: 1 },
    };
  }, [isLinearGradient, gradientSource, backgroundColor]);

  return (
    <WrapperComponent
      style={finalStyle}
      {...(componentTypeRef.current === LinearGradient ? gradientProps : {})}
      {...(extraProps as any)}
    >
      {children}
    </WrapperComponent>
  );
};

Block.displayName = "Block";

export default PhaselisHOC(Block);

type GradientResult = {
  colors: string[];
  locations?: number[];
  start: { x: number; y: number };
  end: { x: number; y: number };
};

export function parseLinearGradient(input: string): GradientResult | null {
  if (!input || typeof input !== "string") return null;

  const backgrounds = [];
  let parenDepth = 0;
  let lastSplit = 0;
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === "(") parenDepth++;
    else if (char === ")") parenDepth--;
    else if (char === "," && parenDepth === 0) {
      backgrounds.push(input.substring(lastSplit, i).trim());
      lastSplit = i + 1;
    }
  }
  backgrounds.push(input.substring(lastSplit).trim());

  const gradientBackground = backgrounds.find((bg) =>
    bg.startsWith("linear-gradient"),
  );
  if (!gradientBackground) return null;

  const gradientContentMatch = gradientBackground.match(
    /linear-gradient\((.*)\)/i,
  );
  if (!gradientContentMatch?.[1]) return null;
  const content = gradientContentMatch[1];

  const parts = content.split(/,(?![^(]*\))/);
  let direction = "to bottom";
  let colorStops = parts;

  const firstPart = parts[0]?.trim() ?? "";
  if (firstPart.includes("deg") || firstPart.startsWith("to ")) {
    direction = firstPart;
    colorStops = parts.slice(1);
  }

  // --- Direction Parsing ---
  let start = { x: 0.5, y: 0 };
  let end = { x: 0.5, y: 1 };
  if (direction.endsWith("deg")) {
    const angle = parseFloat(direction) - 90;
    const rad = (angle * Math.PI) / 180;
    start = { x: 0.5 - Math.cos(rad) / 2, y: 0.5 - Math.sin(rad) / 2 };
    end = { x: 0.5 + Math.cos(rad) / 2, y: 0.5 + Math.sin(rad) / 2 };
  } else if (direction.startsWith("to ")) {
    const dir = direction.replace("to ", "").trim();
    const map: Record<
      string,
      { start: { x: number; y: number }; end: { x: number; y: number } }
    > = {
      "top": { start: { x: 0.5, y: 1 }, end: { x: 0.5, y: 0 } },
      "bottom": { start: { x: 0.5, y: 0 }, end: { x: 0.5, y: 1 } },
      "left": { start: { x: 1, y: 0.5 }, end: { x: 0, y: 0.5 } },
      "right": { start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 } },
      "top left": { start: { x: 1, y: 1 }, end: { x: 0, y: 0 } },
      "top right": { start: { x: 0, y: 1 }, end: { x: 1, y: 0 } },
      "bottom left": { start: { x: 1, y: 0 }, end: { x: 0, y: 1 } },
      "bottom right": { start: { x: 0, y: 0 }, end: { x: 1, y: 1 } },
    };
    const points = map[dir];
    if (points) {
      start = points.start;
      end = points.end;
    }
  }

  // --- Color and Location Parsing ---
  const colorData: { color: string; location: number | null }[] = [];
  const colorStopRegex =
    /((?:rgba?|hsla?)\([^)]+\)|#[0-9a-fA-F]{3,8}|[a-zA-Z]+)\s*(\d*\.?\d+%)?/g;

  for (const stop of colorStops) {
    const matches = [...stop.matchAll(colorStopRegex)];
    for (const match of matches) {
      if (match && match[1]) {
        colorData.push({
          color: match[1],
          location: match[2] ? parseFloat(match[2]) / 100 : null,
        });
      }
    }
  }

  if (colorData.length === 0) return null;

  if (colorData.length === 1 && colorData[0]) {
    colorData.push({ ...colorData[0] });
  }

  const colors = colorData.map((d) => d.color);
  let locations = colorData.map((d) => d.location);

  if (locations.every((l) => l === null)) {
    return { colors, locations: undefined, start, end };
  }

  // Sanitize and fill locations
  let lastKnownLocation = -1;
  locations = locations.map((loc) => {
    if (loc !== null) {
      lastKnownLocation = Math.max(lastKnownLocation, loc);
      return lastKnownLocation;
    }
    return null;
  });

  let lastKnownIndex = -1;
  locations.forEach((loc, i) => {
    if (loc !== null) {
      const startLoc = locations[lastKnownIndex] ?? 0;
      const numGaps = i - lastKnownIndex - 1;
      if (numGaps > 0) {
        const step = (loc - startLoc) / (numGaps + 1);
        for (let j = 1; j <= numGaps; j++) {
          locations[lastKnownIndex + j] = startLoc + j * step;
        }
      }
      lastKnownIndex = i;
    }
  });

  const endGaps = locations.length - 1 - lastKnownIndex;
  if (endGaps > 0) {
    const startLoc = locations[lastKnownIndex] ?? 0;
    const step = (1 - startLoc) / (endGaps + 1);
    for (let j = 1; j <= endGaps; j++) {
      locations[lastKnownIndex + j] = startLoc + j * step;
    }
  }

  return { colors, locations: locations as number[], start, end };
}
