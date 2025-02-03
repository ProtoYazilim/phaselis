import { useEffect, useState, useContext, Children } from "react";
import { View, Text } from "react-native";
import stylesheet from "./assets/styles";
import type { InputGroupProps } from "./types";
import { FormContext } from "../index";
import PhaselisHOC from "../provider/lib/hoc";
import { useCombinedStyle } from "../../hooks";

const InputGroup: React.FC<InputGroupProps> = ({
  label,
  children,
  message,
  style,
  contextValue,
}) => {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  const formContext = useContext(FormContext);

  const { name } = (Children.only(children) as React.ReactElement).props;

  useEffect(() => {
    if (
      formContext?.meta?.[name]?.isChanged &&
      formContext?.meta?.[name]?.isUsed &&
      formContext?.meta?.[name]?.error
    ) {
      setError(formContext?.meta?.[name]?.error);
    } else {
      setError("");
    }
  }, [formContext?.meta, name]);

  useEffect(() => {
    if (formContext?.meta?.[name]?.disabled) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [formContext?.meta, name]);

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.inputGroup,
    "default",
    { disabled, error: Boolean(error) },
  );

  return (
    <View style={getCombinedStyle("container")}>
      <Text style={getCombinedStyle("label")}>{label}</Text>
      {children}
      <Text style={getCombinedStyle("message")}>{error ? error : message}</Text>
    </View>
  );
};

export default PhaselisHOC(InputGroup);
