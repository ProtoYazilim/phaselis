import type { ReactNode, Dispatch, SetStateAction } from "react";

export type ThemeContextType<T = any> = {
  theme: T;
  breakpoints: Breakpoints;
  setTheme: Dispatch<SetStateAction<T>>;
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
