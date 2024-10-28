import { ViewProps, ViewStyle } from "react-native";

interface ShadowAttributes {
  color: string;
  opacity: number;
  offset: [number, number];
  radius: number;
}

interface LinearGradientAttributes {
  colors: (string | number)[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  locations?: number[];
  useAngle?: boolean;
  angleCenter?: { x: number; y: number };
  angle?: number;
}

interface ExtendedViewStyle extends ViewStyle {
  background?: string[] | string;
  shadows?: ShadowAttributes[];
  lineerGradient?: LinearGradientAttributes;
}

interface BlockProps extends ViewProps {
  children?: any;
  contextValue?: any;
  style?: ExtendedViewStyle;
}

export { BlockProps };
