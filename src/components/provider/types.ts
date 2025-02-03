import type { ReactNode } from "react";
export interface PhaselisProviderProps<T> {
  children: ReactNode; // children prop'u, ReactNode tipindedir
  breakpoints?: Breakpoints; // breakpoints opsiyonel, varsayılan bir değer atanabilir
  theme?: T; // theme, generic tipinde olabilir
}

export interface Breakpoints {
  xs: number;
  md: number;
  lg: number;
  xl: number;
}

export enum PlatformEnum {
  Desktop = "Desktop",
  Tablet = "Tablet",
  Mobile = "Mobile",
  TV = "TV",
  default = "",
}

export enum OrientationEnum {
  landscape = "landscape",
  portrait = "portrait",
}

export enum SizeEnum {
  xs = "xs",
  md = "md",
  lg = "lg",
  xl = "xl",
}
