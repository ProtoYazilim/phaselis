import type { RadioGroupProps } from "./types";
import { View } from "react-native";
import PhaselisHOC from "../provider/lib/hoc";
import RadioContext from "./context";
import { stylesheet_group as stylesheet } from "./assets/styles";
import { useEffect, useState } from "react";
import { useCombinedStyle } from "../../hooks";
import { InputHOC } from "../../utils";

const RadioGroup = ({
  children,
  value,
  onChange,
  style,
  disabled,
  contextValue,
  ...extraProps
}: RadioGroupProps) => {
  const [innerValue, setInnerValue] = useState(value);

  useEffect(() => {
    setInnerValue(value);
  }, [value]);

  const handleOnChange = (newVal: any) => {
    setInnerValue(newVal);
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
      value={{ onChange: handleOnChange, groupValue: innerValue }}
    >
      <View style={getCombinedStyle("group")}>{children}</View>
    </RadioContext.Provider>
  );
};

export default InputHOC(PhaselisHOC(RadioGroup));
