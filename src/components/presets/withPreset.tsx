import React, { ComponentType } from "react";
import { merge } from "lodash";

const withPreset = <P extends object, T extends string>(
  WrappedComponent: ComponentType<P>,
  presetList: Map<T, Partial<P>>,
) => {
  // Define the props for the HOC-wrapped component
  type HOCProps = Omit<P, "additionalProp"> & { preset?: T }; // Removed duplicate 'preset' property

  // Create a new component that includes the additional prop
  const HOC: React.FC<HOCProps> = (props) => {
    // Perform a check to ensure props.preset is a valid key of type T before accessing the map
    const presetProps =
      props.preset && presetList.has(props.preset)
        ? presetList.get(props.preset)
        : {};

    const newProps = merge({}, props, presetProps);
    // Render the wrapped component with the additional prop
    return <WrappedComponent {...(newProps as P)} />;
  };
  HOC.displayName = `${
    WrappedComponent.displayName || WrappedComponent.name
  }-withPreset`;

  return HOC;
};

export default withPreset;
