import { useContext } from "react";
import Context from "../context";

function useShadows<T>() {
  const context = useContext(Context);

  if (!context) {
    throw new Error("useTheme must be used within a Context Provider");
  }

  return context.theme.root?.shadows as T;
}

export default useShadows;
