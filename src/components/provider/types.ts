import type { ReactNode } from "react";

export type ThemeContextType<T = any> = {
  theme: T;
  breakpoints: Breakpoints;
  setTheme: (theme: T) => void;
};

export interface Breakpoints {
  xl: number;
  lg: number;
  md: number;
  xs: number;
}

export interface PhaselisProviderProps<T> {
  children: ReactNode;
  breakpoints?: Breakpoints;
  initialTheme?: T;
}
