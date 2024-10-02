import React from "react";
import Context from "./lib/context";
import PhaselisHOC from "./lib/hoc";
import { PhaselisProviderProps, Breakpoints } from "./types";

const defaultBreakpoints: Breakpoints = {
  xl: 1440,
  lg: 1024,
  md: 768,
  xs: 0,
};

const PhaselisProvider = <T,>({
  children,
  breakpoints = defaultBreakpoints,
  theme = {} as T, // theme default olarak generic tipinde
}: PhaselisProviderProps<T>) => {
  return (
    <Context.Provider
      value={{
        theme: theme,
        breakpoints: breakpoints,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context as PhaselisContext, PhaselisHOC };
export default PhaselisProvider;
