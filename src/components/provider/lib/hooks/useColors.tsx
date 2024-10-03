import { useContext } from "react";
import Context from "../context";

function useColors<T>() {
  const context = useContext(Context);

  if (!context) {
    throw new Error("useTheme must be used within a Context Provider");
  }

  return context.theme.root.colors as T;
}

export default useColors;
