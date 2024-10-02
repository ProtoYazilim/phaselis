/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useId, useContext } from "react";
import { View, Text } from "react-native";
import { FormContext } from "@phaselis/components/form";

import stylesheet from "./assets/styles";
import { useCombinedStyle } from "@phaselis/hooks";
import InputGroupProps from "./types";

const InputGroup: React.FC<InputGroupProps> = ({
  label,
  children,
  required: isRequired,
  message,
  style,
}) => {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");
  const [required, setRequired] = useState(isRequired);
  const inputId = useId();

  const formContext = useContext(FormContext);

  const { id, name } = (React.Children.only(children) as React.ReactElement)
    .props;

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
  }, [
    formContext?.meta?.[name]?.isChanged,
    formContext?.meta?.[name]?.isUsed,
    formContext?.meta?.[name]?.error,
  ]);

  useEffect(() => {
    if (formContext?.meta?.[name]?.disabled) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [formContext?.meta?.[name]?.disabled]);

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    {},
    { disabled, error: Boolean(error), required },
  );

  return (
    <View style={getCombinedStyle("container")}>
      <Text style={getCombinedStyle("label")}>{label}</Text>
      {children}
      <Text style={getCombinedStyle("message")}>{error ? error : message}</Text>
    </View>
  );
};

export default InputGroup;
