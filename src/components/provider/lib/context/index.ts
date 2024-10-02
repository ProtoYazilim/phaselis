import { createContext } from "react";

type ThemeContextType<T> = {
  theme: T;
  breakpoints: any;
};

// Context'i generic yapıyoruz
const Context = createContext<ThemeContextType<any>>({
  theme: {} as any,
  breakpoints: {},
});

Context.displayName = "PhaselisContext";

export default Context;
