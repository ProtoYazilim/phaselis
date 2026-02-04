import type {
  LucideIconProps,
  ResponsiveDimension,
  BreakpointDimensionKey,
} from "./types";
import type { FC } from "react";
import { icons } from "lucide-react-native";
import { useWindowDimensions } from "react-native";
import { StyleSheet } from "react-native";
import type { TextStyle, ViewStyle } from "react-native";

type FlattenedStyle = ViewStyle & Pick<TextStyle, "color">;

const KEYS: BreakpointDimensionKey[] = ["xs", "sm", "md", "lg", "xl", "xxl"];
const MIN_WIDTH: Record<BreakpointDimensionKey, number> = {
  xs: 0,
  sm: 320,
  md: 480,
  lg: 768,
  xl: 1024,
  xxl: 1280,
};

function breakpointForWidth(w: number): BreakpointDimensionKey {
  let key: BreakpointDimensionKey = "xs";
  for (const k of KEYS) {
    if (w >= MIN_WIDTH[k]) key = k;
  }
  return key;
}

function toNumber(
  value: ResponsiveDimension | undefined,
  bp: BreakpointDimensionKey,
): number | undefined {
  if (value == null) return undefined;
  if (typeof value === "number") return value;
  if (typeof value === "string") return Number(value);
  const v = value[bp];
  if (v != null) return v;
  for (const k of KEYS) {
    if (value[k] != null) return value[k];
  }
  return undefined;
}

const sizeByKey: Record<string, number> = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 64,
};

const strokeByKey: Record<string, number> = {
  xxs: 4,
  xs: 2,
  sm: 2,
  md: 2,
  lg: 2,
  xl: 2,
  xxl: 2,
};

export const LucideIcon: FC<LucideIconProps> = ({
  name,
  size = "md",
  style,
  width,
  height,
  strokeWidth,
  onClick,
  onPress,
}) => {
  const { width: windowWidth } = useWindowDimensions();
  const bp = breakpointForWidth(windowWidth);
  const flatStyle = StyleSheet.flatten(style) as FlattenedStyle | undefined;

  const w = toNumber(width, bp) ?? flatStyle?.width ?? sizeByKey[size];
  const h = toNumber(height, bp) ?? flatStyle?.height ?? sizeByKey[size];

  // @ts-ignore
  const Icon = icons[name];

  return (
    <Icon
      style={flatStyle}
      width={w}
      height={h}
      color={flatStyle?.color}
      strokeWidth={strokeWidth ?? strokeByKey[size]}
      onPress={onClick ?? onPress}
    />
  );
};
