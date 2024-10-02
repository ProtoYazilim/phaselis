import React, { ForwardedRef } from "react";
import Context from "../context";
import hoistNonReactStatics from "hoist-non-react-statics";

type CombinedProps<P, T> = Omit<T, keyof P> &
  P & {
    ref?: ForwardedRef<any>;
    contextValue?: any;
  };

const PhaselisHOC = <P extends React.PropsWithRef<any>, T = {}>(
  WrappedComponent: React.ComponentType<CombinedProps<P, T>>,
): React.FC<CombinedProps<P, T>> => {
  const ConsumedComponent = React.forwardRef<any, CombinedProps<P, T>>(
    (props: CombinedProps<P, T> & { contextValue?: any }, ref) => {
      const contextValue = React.useContext(Context);
      return (
        <WrappedComponent
          {...(props as CombinedProps<P, T>)}
          contextValue={contextValue}
          ref={ref}
        />
      );
    },
  );

  ConsumedComponent.displayName = `${WrappedComponent.displayName || WrappedComponent.name}`;
  // @ts-ignore
  return hoistNonReactStatics(ConsumedComponent, WrappedComponent);
};

export default PhaselisHOC;
