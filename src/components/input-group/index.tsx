import { useEffect, useState, useContext, Children, useMemo } from "react";
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
  for: _for,
}) => {
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");

  const formContext = useContext(FormContext);

  const inputComponentName = useMemo(() => {
    if (_for) {
      return _for;
    } else {
      return (Children.only(children) as React.ReactElement).props?.name || "";
    }
  }, [_for, children]);

  useEffect(() => {
    if (
      formContext?.meta?.[inputComponentName]?.isChanged &&
      formContext?.meta?.[inputComponentName]?.isUsed &&
      formContext?.meta?.[inputComponentName]?.error
    ) {
      setError(formContext?.meta?.[inputComponentName]?.error);
    } else {
      setError("");
    }
  }, [formContext?.meta, inputComponentName]);

  useEffect(() => {
    if (formContext?.meta?.[inputComponentName]?.disabled) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [formContext?.meta, inputComponentName]);

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.inputGroup,
    "default",
    { disabled, error: Boolean(error) },
  );

  return (
    <>
      <View style={getCombinedStyle("container")}>
        {typeof label === "string" && (
          <Text style={getCombinedStyle("label")}>{label}</Text>
        )}
        {children}
        {(error || message) && (
          <Text style={getCombinedStyle("message")}>
            {error ? error : message}
          </Text>
        )}
      </View>
    </>
  );
};

export default PhaselisHOC(InputGroup);
