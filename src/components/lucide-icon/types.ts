import type { ViewStyle } from "react-native";
import type { UnistylesValues } from "react-native-unistyles";
import type { ComponentSize, SlotIconName } from "../../types";

/**
 * Breakpoint key names matching common responsive helpers (e.g. sizeManager.responsive()).
 * Object geldiğinde ekran genişliğine göre bu anahtarlardan biri seçilir, değer olduğu gibi kullanılır (büyütme/küçültme yok).
 */
export type BreakpointDimensionKey = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

/**
 * width/height: number veya string (olduğu gibi kullanılır) veya
 * breakpoint objesi (örn. sizeManager.responsive(iconSize) -> { xs: 24, sm: 32, md: 40, lg: 48, xl: 56, xxl: 64 }).
 * Komponent içinde büyütme/küçültme yapılmaz, sadece obje ise mevcut breakpoint değeri seçilir.
 */
export type ResponsiveDimension =
  | number
  | string
  | Record<BreakpointDimensionKey, number>
  | Partial<Record<BreakpointDimensionKey, number>>;

export interface LucideIconStyles {
  container?: UnistylesValues;
}

export interface LucideIconProps {
  name?: SlotIconName;
  size?: ComponentSize;
  style?: LucideIconStyles | ViewStyle | UnistylesValues;
  width?: ResponsiveDimension;
  height?: ResponsiveDimension;
  strokeWidth?: number;
  onClick?: () => void;
  onPress?: () => void;
}
