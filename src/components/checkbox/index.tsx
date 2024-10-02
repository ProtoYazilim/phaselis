import React, { useEffect, useMemo, useRef, useState } from "react";
import { Text, View, TextInput, Pressable } from "react-native";
import stylesheet from "./assets/styles";

import { PhaselisHOC } from "@phaselis/components/provider";
import { defaultCheckedSvg, defaultUnCheckedSvg } from "./assets/icons";
import { InputHOC } from "@phaselis/utils";
import { CheckboxProps } from "./types";
import LucideIcon from "@phaselis/components/lucide-icon";
import { useCombinedStyle } from "@phaselis/hooks";

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    disabled,
    text,
    style,
    children,
    contextValue,
    value,
    isChanged,
    isUsed,
    error,
    size,
    checkedSvg = defaultCheckedSvg,
    unCheckedSvg = defaultUnCheckedSvg,
    onChange,
    ...extraProps
  } = props;

  const [checked, setChecked] = useState<boolean>(Boolean(value));
  const [isFocus, setIsFocus] = useState(false);

  const refInput = useRef<TextInput>(null);

  const showError = useMemo(() => {
    return isChanged && isUsed && error ? true : false;
  }, [error, isUsed, isChanged]);

  useEffect(() => {
    setChecked(Boolean(value));
  }, [value]);

  const svg = checked ? checkedSvg : unCheckedSvg; // todo: add svg support

  const iconSizeLiteral = {
    xs: 16,
    sm: 20,
    md: 26,
    lg: 42,
    xl: 50,
    xxl: 80,
  };

  const handleChange = () => {
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
    { error: showError, disabled, focus: isFocus, size, ...extraProps },
  );

  return (
    <Pressable
      style={getCombinedStyle("container")}
      onPress={handleChange}
      disabled={disabled}
    >
      <View style={getCombinedStyle("element")}>
        {checked ? (
          <LucideIcon
            name={"Check"}
            style={getCombinedStyle("icon")}
            width={iconSizeLiteral[size || "md"]}
            height={iconSizeLiteral[size || "md"]}
            strokeWidth={3}
          />
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
          setIsFocus(false);
        }}
        ref={refInput}
      />
    </Pressable>
  );
};

export default InputHOC(PhaselisHOC<CheckboxProps, CheckboxExtraProps>(Checkbox));
