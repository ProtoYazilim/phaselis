/* eslint-disable react/display-name */
import React, { useEffect, useRef } from "react";
import hoistNonReactStatics from "hoist-non-react-statics";
import FormContext from "src/components/form/context";

export const InputHOC = <P extends React.PropsWithRef<any>>(
  WrappedComponent: React.ComponentType<P>,
): React.ForwardRefExoticComponent<P & React.RefAttributes<any>> => {
  const ConsumedComponent = React.forwardRef<
    any,
    P & { name?: string; partofform?: boolean; onChange: any; onBlur: any }
  >((props, ref) => {
    const formContext = React.useContext(FormContext);

    const prevProps = useRef(props);

    useEffect(() => {
      if (props.partofform !== false && formContext?.registerComponent) {
        formContext?.registerComponent?.(props);
      }

      return () => {
        if (props.partofform !== false) {
          formContext?.unRegisterComponent?.(props.name || "");
        }
      };
    }, []);

    useEffect(() => {
      if (props.partofform === false) {
        return;
      }

      const changedProps = {};
      for (const key in props) {
        //@ts-ignore
        if (props[key] !== prevProps.current[key]) {
          //@ts-ignore
          changedProps[key] = props[key];
        }
      }
      // Call updateComponentProps with only changed props
      formContext?.updateComponentProps?.({
        name: props.name,
        ...changedProps,
      });
      // Update previous props with current props for next comparison
      prevProps.current = props;
    }, [props]);

    const onChangeInput = (event: any, value: any, ...args: any[]): any => {
      if (props?.onChange) {
        props?.onChange(event, value, ...args);
      }
      if (props?.partofform !== false) {
        formContext.handleComponentChange(event, props.name || "", value);
      }
    };
    const onBlurInput = (event: any, value: any, ...args: any[]): any => {
      if (props?.onBlur) {
        props?.onBlur(event, value, ...args);
      }
      if (props?.partofform !== false) {
        formContext.handleComponentBlur(event, props.name || "", value);
      }
    };

    const inputProps =
      props.partofform !== false ? formContext?.meta?.[props?.name || ""] : {};

    return (
      <WrappedComponent
        //@ts-ignore
        {...(props as P)}
        {...inputProps}
        onChange={onChangeInput}
        onBlur={onBlurInput}
        ref={ref}
      />
    );
  });

  return hoistNonReactStatics(
    ConsumedComponent,
    WrappedComponent,
  ) as React.ForwardRefExoticComponent<P & React.RefAttributes<any>>;
};
