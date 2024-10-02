import { useContext } from "react";
import Context from "../context";

function useSpacings<T>() {
  const context = useContext(Context);

  if (!context) {
    throw new Error("useSpacings must be used within a Context Provider");
  }

  return context.theme.root.spacings as T;
}

export default useSpacings;
