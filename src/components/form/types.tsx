import { FC, ReactNode } from "react";
import { InputControlProps } from "src/types";

interface FormInputComponentGenericProps
  extends InputControlProps<any, any, any> {
  children?: ReactNode | FC | any | Element;
  isCheckable?: boolean;
  isFileUpload?: boolean;
  checked?: boolean;
  valueKey?: string;
  id?: string; //not used but maybe used in future
  disabled?: boolean; //not used but maybe used in future
  className?: string; //not used but maybe used in future
  contextValue?: any; //not used but maybe used in future
}

interface FormProps {
  children: ReactNode;
  contextValue?: any;
  id?: string;
  onReset?: (event?: any) => void;
  onSubmit?: (event?: any, values?: any) => void;
  onError?: (error?: any, extra?: any) => void;
  onChange?: (event?: any, state?: any) => void;
  [key: string]: any;
}

export { FormInputComponentGenericProps, FormProps };
