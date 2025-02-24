import { useContext } from "react";
import Context from "../context";

function useThemeStyles<T>(componentName: string): T | any {
  const context = useContext(Context);

  if (!context) {
    throw new Error("useTheme must be used within a Context Provider");
  }

  if (!context.theme) {
    throw new Error(
      `No theme found for component "${componentName}". Make sure the component is wrapped in a ThemeProvider`,
    );
  }

  if (componentName) {
    return context.theme[componentName] as any;
  }

  return context.theme as T;
}

export default useThemeStyles;
