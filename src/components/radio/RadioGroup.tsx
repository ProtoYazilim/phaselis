import type { RadioGroupProps } from "./types";
import { View } from "react-native";
import PhaselisHOC from "../provider/lib/hoc";
import RadioContext from "./context";
import { stylesheet_group as stylesheet } from "./assets/styles";
import { useEffect, useState, type FC } from "react";
import { useCombinedStyle } from "../../hooks";
import { InputHOC } from "../../utils";

const RadioGroup: FC<RadioGroupProps> = (props) => {
  const { children, value, onChange, disabled, ...extraProps } = props;

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
    "radioGroup",
    "default",
    {
      ...props,
      disabled,
      ...extraProps,
    },
  );

  return (
    <RadioContext.Provider
      value={{ onChange: handleOnChange, groupValue: innerValue }}
    >
      <View style={getCombinedStyle("group", true)}>{children}</View>
    </RadioContext.Provider>
  );
};

export default InputHOC(PhaselisHOC(RadioGroup));
