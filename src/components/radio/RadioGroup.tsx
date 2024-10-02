import { View } from "react-native";
import { InputHOC } from "@phaselis/utils";
import RadioContext from "./context";
import { RadioGroupProps } from "./types";
import { stylesheet_group as stylesheet } from "./assets/styles";
import { PhaselisHOC } from "@phaselis/components/provider";
import { useCombinedStyle } from "@phaselis/hooks";

const RadioGroup = ({
  children,
  value,
  onChange,
  style,
  disabled,
  contextValue,
  ...extraProps
}: RadioGroupProps) => {
  const handleOnChange = (newVal: any) => {
    onChange?.(null, newVal);
  };

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.radioGroup,
    {
      disabled,
      ...extraProps,
    },
  );

  return (
    <RadioContext.Provider
      value={{ onChange: handleOnChange, groupValue: value }}
    >
      <View style={getCombinedStyle("group")}>{children}</View>
    </RadioContext.Provider>
  );
};

export default InputHOC(
  PhaselisHOC<RadioGroupProps, RadioGroupExtraProps>(RadioGroup),
);
