import { UnistylesRegistry } from "react-native-unistyles";
import { darkTheme, lightTheme } from "phaselis";

type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

export const breakpoints = {
  xs: 0,
  sm: 320,
  md: 480,
  lg: 768,
  xl: 1024,
  xxl: 1280,
} as const;

type AppBreakpoints = typeof breakpoints;

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}

declare module "react-native-unistyles" {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

UnistylesRegistry.addThemes({
  light: lightTheme,
  dark: darkTheme,
})
  .addConfig({
    adaptiveThemes: true,
    initialTheme: "light",
  })
  .addBreakpoints(breakpoints);
