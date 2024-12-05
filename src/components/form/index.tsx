import React, {
  FC,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { PhaselisHOC } from "@phaselis/components/provider";
import { isValid } from "./lib";
import FormContext from "./context";
import FormReference from "./reference";
import { FormInputComponentGenericProps, FormProps } from "./types";

export const Form: FC<FormProps> = (
  {
    children,
    contextValue,
    id,
    onReset,
    onSubmit,
    onError,
    onChange,
    ...otherProps
  },
  ref,
) => {
  useImperativeHandle(ref, () => ({
    setValues,
    getValues,
    setComponentProps,
    getComponentProps,
    validate,
    validateAll,
    getErrorField,
    showError,
    hideError,
    hideErrors,
    setErrorByName,
  }));

  const formId = useId();

  const [meta, setMeta] = useState<any>({});
  const metaRef = useRef<Record<string, any>>({});

  const registerComponent = (
    componentProps: FormInputComponentGenericProps,
  ) => {
    metaRef.current[componentProps.name || new Date().toString()] = {
      ...componentProps,
      isCheckable: !!componentProps?.isCheckable,
      isFileUpload: !!componentProps?.isFileUpload,
      valueKey: componentProps?.valueKey || "value",
      isUsed: false,
      ...(componentProps?.isCheckable
        ? { checked: !!componentProps?.checked }
        : {}),
    };
    setMeta(metaRef.current);
    setErrors();
  };

  const unRegisterComponent = (name: string): void => {
    const tempRefrence = { ...metaRef.current };
    delete tempRefrence[name];
    metaRef.current = tempRefrence;
    setMeta(metaRef.current);
  };

  const updateComponentProps = (
    componentNewProps: FormInputComponentGenericProps,
  ) => {
    if (componentNewProps.name) {
      metaRef.current[componentNewProps.name || ""] = {
        ...metaRef.current[componentNewProps.name],
        ...componentNewProps,
      };
      setMeta(metaRef.current);
      setErrors();
    }
  };

  const setValues = (object: any, callback?: Function) => {
    metaRef.current = {
      ...metaRef.current,
      ...Object.keys(object).reduce((newMeta: any, name: string) => {
        newMeta[name] = {
          ...metaRef.current[name],
        };
        if (isValid(object[name])) {
          // newMeta = setErrorByName(newMeta, name)
          newMeta[name].value = object[name];
          newMeta[name].isCheckable
            ? (newMeta[name].checked = object[name])
            : null;
          newMeta[name].isChanged = false;
          newMeta[name].isUsed = false;
          newMeta[name].error = newMeta[name].error || null;
        }

        return newMeta;
      }, {}),
    };
    setMeta(metaRef.current);
    setErrors();
  };

  const resetValues = (callback?: Function) => {
    metaRef.current = Object.keys(metaRef.current).reduce(
      (newMeta: any, name: string) => {
        const props = metaRef.current[name];
        let resetValue =
          props.resetValue !== undefined ? props.resetValue : null;

        if (metaRef.current[name].isCheckable && !resetValue)
          resetValue = false;

        newMeta[name] = {
          ...metaRef.current[name],
        };
        newMeta[name].isChanged = false;
        newMeta[name].isUsed = false;
        newMeta[name][metaRef.current[name]?.valueKey || "value"] = resetValue;
        return newMeta;
      },
      {},
    );
    setMeta(metaRef.current);
    setErrors();
  };

  const getComponentProps = (name: string) => {
    return metaRef.current[name];
  };

  const setComponentProps = (props: any) => {
    metaRef.current[props.name] = {
      ...metaRef.current[props.name],
      ...props,
    };
    setMeta(metaRef.current);
  };

  // TODO: check this function
  const setErrorByName = (newMeta: any, name: string) => {
    const tempNewMeta = { ...newMeta };
    tempNewMeta[name] = {
      ...metaRef.current[name],
    };
    const props = metaRef.current[name];

    if (props?.validations) {
      for (const validation of props?.validations) {
        const error = validation(props?.value, props, metaRef.current);

        if (error) {
          newMeta[name].error = error;

          break;
        } else {
          delete newMeta[name].error;
        }
      }
    }

    return newMeta;
  };

  const handleComponentChange = (event: any, name: string, value: any) => {
    const isUsed = metaRef.current[name]?.isUsed;
    const newValue = value || event?.target?.value;
    metaRef.current[name] = {
      ...metaRef.current[name],
      isChanged: true,
      isUsed: isUsed,
      value: newValue,
    };
    setErrors();
    setMeta(metaRef.current);
    onChange && onChange(event, metaRef.current);
  };

  const handleComponentBlur = (event: any, name: string, value: any) => {
    const isUsed = metaRef.current[name]?.isUsed;
    const newValue = value || event?.target?.value;
    metaRef.current[name] = {
      ...metaRef.current[name],
      isChanged: true,
      isUsed: isUsed,
      value: newValue,
    };
    onChange && onChange(event, metaRef.current);
  };

  const setErrors = () => {
    metaRef.current = Object.keys(metaRef.current).reduce(
      (newMeta: any, name: string) => {
        const props = metaRef.current[name];
        const value = props.value;
        const validations = props.validations;

        newMeta[name] = {
          ...metaRef.current[name],
        };

        if (validations) {
          for (const validation of validations) {
            const error = validation(value, props, metaRef.current);
            if (error) {
              newMeta[name].error = error;
              break;
            } else {
              delete newMeta[name].error;
            }
          }
        }

        return newMeta;
      },
      {},
    );

    setMeta(metaRef.current);
  };

  const getValues = () => {
    return Object.keys(metaRef.current).reduce((values: any, name) => {
      values[name] = metaRef.current[name].isCheckable
        ? metaRef.current[name].checked
        : metaRef.current[name].value;
      return values;
    }, {});
  };

  const validate = (name: string) => {
    metaRef.current = {
      ...metaRef.current,
      [name]: {
        ...metaRef.current[name],
        isChanged: true,
        isUsed: true,
      },
    };

    setMeta(metaRef.current);
    var errors = Object.keys(metaRef.current).filter((cmpName) => {
      return cmpName === name && metaRef.current[name].error;
    });

    return !(errors && errors.length > 0);
  };

  const validateAll = () => {
    metaRef.current = {
      ...metaRef.current,
      ...Object.keys(metaRef.current).reduce((newMeta: any, name) => {
        newMeta[name] = {
          ...metaRef.current[name],
          isChanged: true,
          isUsed: true,
        };
        return newMeta;
      }, {}),
    };

    setMeta(metaRef.current);

    var errors = Object.keys(metaRef.current).filter((name) => {
      return metaRef.current[name].error;
    });

    return !(errors && errors.length > 0);
  };

  const getErrorField = () => {
    var errors = Object.keys(metaRef.current).filter((name) => {
      return metaRef.current[name].error;
    });
    return errors && errors.length > 0 ? errors : [];
  };

  const showError = (name: string, error: any) => {
    if (name) {
      metaRef.current = {
        ...metaRef.current,
        [name]: {
          ...metaRef.current[name],
          isChanged: true,
          isUsed: true,
          error,
        },
      };
      setMeta(metaRef.current);
    }
  };

  const hideError = (name: string) => {
    metaRef.current = {
      ...metaRef.current,
      [name]: {
        ...metaRef.current[name],
        error: null,
        isChanged: false,
        isUsed: false,
      },
    };
    setMeta(metaRef.current);
  };

  const hideErrors = () => {
    metaRef.current = {
      ...metaRef.current,
      ...Object.keys(metaRef.current).reduce((newMeta: any, name) => {
        newMeta[name] = {
          ...metaRef.current[name],
          error: null,
          isChanged: false,
          isUsed: false,
        };
        return newMeta;
      }, {}),
    };
    setMeta(metaRef.current);
  };

  useEffect(() => {
    // console.log(`Form:${formId}-${id}`, meta)
  }, [meta]);

  const submit = () => {
    let validationResult = validateAll();
    let values = getValues();
    if (onSubmit) {
      if (validationResult) {
        onSubmit({ target: { value: null } }, values);
      }
    }

    if (onError) {
      if (!validationResult) {
        onError("event", getErrorField());
      }
    }
  };

  const reset = () => {
    resetValues();
    if (onReset) {
      onReset();
    }
  };

  return (
    <FormContext.Provider
      value={{
        registerComponent: registerComponent,
        unRegisterComponent: unRegisterComponent,
        formId: formId,
        submit: submit,
        reset: reset,
        meta: meta,
        handleComponentChange: handleComponentChange,
        handleComponentBlur: handleComponentBlur,
        updateComponentProps: updateComponentProps,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

Form.displayName = "form";
export type { FormReference };
export { FormContext };
export default PhaselisHOC<FormProps>(
  React.forwardRef(Form as any) as FC<FormProps>,
);
