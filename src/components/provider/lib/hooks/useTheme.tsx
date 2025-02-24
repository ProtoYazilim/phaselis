import { useContext } from "react";
import Context from "../context";
import { darkTheme } from "../../../../theme/darkTheme";
import { lightTheme } from "../../../../theme/lightTheme";
import type { ThemeContextType } from "../../types";

type ThemeType = "light" | "dark";

const themeList = {
  light: lightTheme,
  dark: darkTheme,
} as const;

export function useTheme<T = typeof lightTheme>() {
  const context = useContext(Context) as ThemeContextType<T>;

  if (!context) {
    throw new Error("useTheme must be used within a Context Provider");
  }

  const themeName = (context.theme as any)?.config?.name as ThemeType;

  const setTheme = (type: ThemeType) => {
    if (themeList[type]) {
      context.setTheme(themeList[type] as T);
    }
  };

  const toggleTheme = () => {
    const newType = themeName === "dark" ? "light" : "dark";
    setTheme(newType);
  };

  return {
    themeName,
    setTheme,
    theme: context.theme,
    toggleTheme,
  };
}

export default useTheme;
