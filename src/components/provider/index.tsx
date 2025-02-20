import type { PhaselisProviderProps, Breakpoints } from "./types";
import Context from "./lib/context";
import PhaselisHOC from "./lib/hoc";
import { useTheme, useColors, useSpacings, useThemeStyles } from "./lib/hooks";
import { useState } from "react";
import { lightTheme } from "../../theme";

const defaultBreakpoints: Breakpoints = {
  xl: 1440,
  lg: 1024,
  md: 768,
  xs: 0,
};

const PhaselisProvider = <T = typeof lightTheme,>({
  children,
  breakpoints = defaultBreakpoints,
  initialTheme = lightTheme as T,
}: PhaselisProviderProps<T>) => {
  const [theme, setTheme] = useState<T>(initialTheme);

  return (
    <Context.Provider
      value={{
        theme,
        setTheme,
        breakpoints,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export {
  Context as PhaselisContext,
  PhaselisHOC,
  useColors,
  useSpacings,
  useTheme,
  useThemeStyles,
};
export default PhaselisProvider;
