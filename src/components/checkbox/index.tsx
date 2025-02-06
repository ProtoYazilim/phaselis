import { useEffect, useMemo, useRef, useState } from "react";
import {
  Text,
  TextInput,
  Pressable,
  Animated,
  View,
  Easing,
} from "react-native";
import stylesheet from "./assets/styles";
import type { CheckboxProps } from "./types";
import PhaselisHOC from "../provider/lib/hoc";
import { Slot } from "../index";
import { useCombinedStyle } from "../../hooks";
import { InputHOC } from "../../utils";

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
    pressed,
    ...extraProps
  } = props;

  const [checked, setChecked] = useState<boolean>(Boolean(value));
  const [isFocus, setIsFocus] = useState(false);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const strokeWidthLiteral = {
    xs: 4,
    sm: 4,
    md: 4,
    lg: 3,
    xl: 3,
    xxl: 3,
  };

  const refInput = useRef<TextInput>(null);

  const showError = useMemo(() => {
    return isChanged && isUsed && error ? true : false;
  }, [error, isUsed, isChanged]);

  useEffect(() => {
    setChecked(Boolean(value));
  }, [value]);

  useEffect(() => {
    if (pressed !== undefined) {
      Animated.timing(scaleAnim, {
        toValue: pressed ? 0.5 : 1,
        duration: 100,
        useNativeDriver: false,
      }).start();
    }
  }, [pressed, scaleAnim]);

  const handleChange = () => {
    setChecked((prev) => !prev);
    refInput.current?.focus();
    setIsFocus(true);
    if (onChange) {
      onChange(
        {
          nativeEvent: {
            text: !checked,
            checked: !checked,
          },
        },
        !checked,
      );
    }
  };

  const handlePressIn = () => {
    if (pressed === undefined) {
      Animated.timing(scaleAnim, {
        toValue: 0.5,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  };

  const handlePressOut = () => {
    if (pressed === undefined) {
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false,
      }).start();
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
      ...extraProps,
    },
  );

  return (
    <Pressable
      style={getCombinedStyle("container")}
      onPress={handleChange}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      key={`checkbox-${id}`}
      id={id}
    >
      <View style={[getCombinedStyle("element")]}>
        {checked ? (
          <Animated.View
            style={{
              transform: [{ scale: scaleAnim }],
            }}
          >
            <Slot
              style={getCombinedStyle("icon")}
              icon={iconName}
              strokeWidth={strokeWidthLiteral[size]}
            >
              {IconSlot && <IconSlot />}
            </Slot>
          </Animated.View>
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
          onBlur?.(null, Boolean(value));
          setIsFocus(false);
        }}
        ref={refInput}
      />
    </Pressable>
  );
};

export default InputHOC(PhaselisHOC(Checkbox));
