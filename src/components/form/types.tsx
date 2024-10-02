import { IFormPropTypes } from "@phaselis/types";

interface FormInputComponentGenericProps extends IFormPropTypes {
  isCheckable?: boolean;
  isFileUpload?: boolean;
  defaultValue?: any;
  checked?: boolean;
  valueKey?: string;
}

interface FormProps {
  children: any;
  contextValue?: any;
  id?: string;
  onReset?: (event?: any) => any;
  onSubmit?: (event?: any, values?: any) => any;
  onError?: (error?: any, extra?: any) => any;
  onChange?: (event?: any, state?: any) => any;
  [key: string]: any;
}

export { FormInputComponentGenericProps, FormProps };
