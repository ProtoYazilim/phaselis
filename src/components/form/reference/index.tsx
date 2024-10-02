interface FormReference {
  setValues: (object: any, callback?: Function) => void;
  getValues: () => any;
  setComponentProps: (props: any) => void;
  getComponentProps: (name: string) => any;
  validate: (name: string) => boolean;
  validateAll: () => boolean;
  getErrorField: () => string[];
  showError: (name: string, error: any) => void;
  hideError: (name: string) => void;
  hideErrors: () => void;
}

export default FormReference;
