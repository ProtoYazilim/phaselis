import { useContext, useState, useCallback } from "react";
import Context from "../context";
import { darkTheme } from "../../../../theme/darkTheme";
import { lightTheme } from "../../../../theme/lightTheme";

type ThemeType = "light" | "dark";

const themeList = {
  light: lightTheme,
  dark: darkTheme,
};

export function useTheme() {
  const context = useContext(Context);
  const [currentTheme, setCurrentTheme] = useState(context?.theme);

  if (!context) {
    throw new Error("useTheme must be used within a Context Provider");
  }

  const themeName = currentTheme?.config?.name as ThemeType;

  const setTheme = useCallback(
    (type: ThemeType) => {
      if (context && themeList[type]) {
        context.theme = themeList[type];
        setCurrentTheme(themeList[type]);
      }
    },
    [context],
  );

  return {
    themeName,
    setTheme,
    theme: currentTheme,
  };
}

export default useTheme;
