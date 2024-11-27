import { FC, ReactNode } from "react";

interface FormInputComponentGenericProps {
  children?: ReactNode | FC | any | Element;
  name?: string;
  value?: any;
  validations?: Function[];
  isChanged?: any; //not
  isUsed?: any; //not
  error?: any; //not
  onChange?: (event: any, value: any, ...args: any[]) => void;
  resetValue?: any;
  isCheckable?: boolean;
  isFileUpload?: boolean;
  checked?: boolean;
  valueKey?: string;
  id?: string; //not used but maybe used in future
  disabled?: boolean; //not used but maybe used in future
  className?: string; //not used but maybe used in future
  contextValue?: any; //not used but maybe used in future
  partofform?: boolean; //not used but maybe used in future
  onBlur?: (event: any, value: any, ...args: any[]) => void; //not used but maybe used in future
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
