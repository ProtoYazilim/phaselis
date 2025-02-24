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

export interface PhaselisProviderProps {
  children: ReactNode;
  breakpoints?: Breakpoints;
  initialThemeName: string;
  themes: Record<string, any>;
}
