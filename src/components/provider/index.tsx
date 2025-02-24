import type { PhaselisProviderProps, Breakpoints } from "./types";
import Context from "./lib/context";
import PhaselisHOC from "./lib/hoc";
import {
  useTheme,
  useColors,
  useSpacings,
  useThemeStyles,
  useShadows,
} from "./lib/hooks";
import { useEffect, useState } from "react";

const defaultBreakpoints: Breakpoints = {
  xl: 1440,
  lg: 1024,
  md: 768,
  xs: 0,
};

const PhaselisProvider = ({
  children,
  breakpoints = defaultBreakpoints,
  themes,
  initialThemeName,
}: PhaselisProviderProps) => {
  const [theme, setTheme] = useState(themes?.[initialThemeName]);

  const contextValue = {
    theme,
    setTheme,
    breakpoints,
  };

  useEffect(() => {
    setTheme(themes?.[initialThemeName]);
  }, [themes, initialThemeName]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export {
  Context as PhaselisContext,
  PhaselisHOC,
  useColors,
  useSpacings,
  useTheme,
  useThemeStyles,
  useShadows,
};

export default PhaselisProvider;
