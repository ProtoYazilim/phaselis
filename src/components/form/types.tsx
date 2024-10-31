import { IFormPropTypes } from "@phaselis/types";

interface FormInputComponentGenericProps extends IFormPropTypes {
  isCheckable?: boolean;
  isFileUpload?: boolean;
  checked?: boolean;
  valueKey?: string;
}

interface FormProps {
  children: any;
  contextValue?: any;
  id?: string;
  onReset?: (event?: any) => void;
  onSubmit?: (event?: any, values?: any) => void;
  onError?: (error?: any, extra?: any) => void;
  onChange?: (event?: any, state?: any) => void;
  [key: string]: any;
}

export { FormInputComponentGenericProps, FormProps };
