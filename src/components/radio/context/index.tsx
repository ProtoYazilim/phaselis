import { createContext } from "react";

const RadioContext = createContext<{
  onChange: (value: any) => void;
  groupValue: any;
}>({
  onChange: () => {},
  groupValue: undefined,
});

export default RadioContext;
