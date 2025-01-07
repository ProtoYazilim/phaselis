import React, { useEffect, useMemo, useRef, useState } from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import stylesheet from "./assets/styles";
import { CheckboxProps } from "./types";
import { PhaselisHOC } from "src/components/provider";
import Slot from "src/components/slot";
import { useCombinedStyle } from "src/hooks";
import { InputHOC } from "src/utils/lib/hocs";

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    id,
    disabled,
    text,
    style,
    children,
    contextValue,
    value,
    isChanged,
    isUsed,
    error,
    size = "md",
    onBlur,
    onChange,
    iconName = "Check",
    IconSlot,
    variation = "primary",
    ...extraProps
  } = props;

  const [checked, setChecked] = useState<boolean>(Boolean(value));
  const [isFocus, setIsFocus] = useState(false);
  const strokeWidth = ["xs", "sm", "md"].includes(size) ? 4 : 3;
  const [isPressed, setIsPressed] = useState(false);

  const refInput = useRef<TextInput>(null);

  const showError = useMemo(() => {
    return isChanged && isUsed && error ? true : false;
  }, [error, isUsed, isChanged]);

  useEffect(() => {
    setChecked(Boolean(value));
  }, [value]);

  const handleChange = () => {
    // console.log("handleChange");
    setIsPressed(false);
    const newValue = !checked;
    setChecked(newValue);
    refInput.current?.focus();
    setIsFocus(true);
    if (onChange) {
      onChange(
        {
          nativeEvent: {
            text: newValue,
            checked: newValue,
          },
        },
        newValue,
      );
    }
  };

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.checkbox,
    variation,
    {
      error: showError,
      disabled,
      focus: isFocus,
      size,
      pressed: isPressed,
      ...extraProps,
    },
  );

  return (
    <Pressable
      style={getCombinedStyle("container")}
      onPress={handleChange}
      onPressIn={() => {
        setIsPressed(true);
      }}
      disabled={disabled}
      key={`checkbox-${id}`}
      id={id}
    >
      <View style={getCombinedStyle("element")}>
        {checked ? (
          <Slot
            style={getCombinedStyle("icon")}
            icon={iconName}
            strokeWidth={strokeWidth}
          >
            {IconSlot && <IconSlot />}
          </Slot>
        ) : null}
      </View>
      {children || <Text style={getCombinedStyle("text")}>{text}</Text>}
      <TextInput
        showSoftInputOnFocus={false}
        value={""}
        style={{
          width: 0,
          height: 0,
          opacity: 0,
        }}
        selectionColor={"transparent"}
        onBlur={() => {
          onBlur?.(null, value);
          setIsFocus(false);
        }}
        ref={refInput}
      />
    </Pressable>
  );
};

export default InputHOC(PhaselisHOC(Checkbox));
