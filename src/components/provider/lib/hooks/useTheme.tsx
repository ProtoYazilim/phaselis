import { useContext } from "react";
import Context from "../context";
import { darkTheme } from "../../../../theme/darkTheme";
import { lightTheme } from "../../../../theme/lightTheme";
import type { ThemeContextType } from "../../types";

type ThemeType = "light" | "dark";

const themeList = {
  light: lightTheme,
  dark: darkTheme,
};

export function useTheme<T = typeof lightTheme>() {
  const context = useContext<ThemeContextType<T>>(Context);

  if (!context) {
    throw new Error("useTheme must be used within a Context Provider");
  }

  const themeName = (context.theme as any)?.config?.name as ThemeType;

  const setInitialTheme = (newDarkTheme, newLightTheme) => {
    themeList.light = newLightTheme;
    themeList.dark = newDarkTheme;
  };

  const setTheme = (type: ThemeType) => {
    if (themeList[type]) {
      context.setTheme(themeList[type] as T);
    }
  };

  return {
    themeName,
    setInitialTheme,
    setTheme,
    theme: context.theme,
  };
}

export default useTheme;
