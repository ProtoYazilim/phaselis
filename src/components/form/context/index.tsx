import { createContext } from "react";

export const FormContext = createContext<{
  registerComponent: any;
  unRegisterComponent: (name: string) => void;
  formId: string;
  submit: () => void;
  reset: () => void;
  meta: any;
  handleComponentChange: (event: any, name: string, value: any) => void;
  handleComponentBlur: (event: any, name: string, value: any) => void;
  updateComponentProps: any;
}>({
  registerComponent: null,
  unRegisterComponent: () => {},
  formId: "",
  submit: () => {},
  reset: () => {},
  meta: null,
  handleComponentChange: () => {},
  handleComponentBlur: () => {},
  updateComponentProps: null,
});
