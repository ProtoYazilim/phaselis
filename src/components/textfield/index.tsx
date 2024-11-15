import React, { useState, useRef, useMemo } from "react";
import {
  NativeSyntheticEvent,
  Platform,
  TextInput,
  TextInputChangeEventData,
  TextInputFocusEventData,
  TextInputKeyPressEventData,
} from "react-native";
import { InputHOC, validateText } from "@phaselis/utils";
import stylesheet from "./assets/styles";
import { PhaselisHOC } from "@phaselis/components/provider";
import { TextFieldProps } from "./types";
import { Block, Slot } from "@phaselis/components";
import { useMaskedInputProps } from "react-native-mask-input";
import { useCombinedStyle } from "@phaselis/hooks";

const TextField: React.FC<TextFieldProps> = ({
  error,
  autoFocus,
  onChange,
  onBlur,
  onFocus,
  validator,
  disabled,
  contextValue,
  style,
  readOnly = false,
  type = "default",
  LeftSlot,
  RightSlot,
  id,
  loading,
  loadingIcon,
  uppercase = false,
  size = "md",
  isChanged,
  isUsed,
  leftIcon,
  rightIcon,
  value,
  mask,
  numberOfLines = 4,
  textarea,
  onChangeText,
  ...extraProps
}) => {
  const [isFocus, setIsFocus] = useState(autoFocus);
  const inputRef = useRef<TextInput>(null);

  const showError = useMemo(() => {
    return isChanged && isUsed && error ? true : false;
  }, [error, isUsed, isChanged]);

  const platforms = {
    ios: "ios",
    android: "android",
  };

  const getEventHandlers = () => {
    return {
      onChange: onChangeHandler,
      onBlur: Platform.OS === platforms.ios ? onBlurHandler : () => {},
      onEndEditing:
        Platform.OS === platforms.android ? onBlurHandler : () => {},
      onFocus: onFocusHandler,
    };
  };

  const onChangeHandler = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    if (onChange) {
      onChange(e, e.nativeEvent.text);
    }
  };

  const onBlurHandler = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocus(false);
    if (onBlur) {
      onBlur(e, e.nativeEvent.text);
    }
  };

  const onFocusHandler = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    setIsFocus(true);
    if (onFocus) {
      onFocus(event as any);
    }
  };

  const getValidationEventHandlers = () => {
    return {
      onChange: onValidChange,
      onKeyPress: onValidKeyPress,
      onBlur: Platform.OS === platforms.ios ? onValidBlur : () => {},
      onEndEditing: Platform.OS === platforms.android ? onValidBlur : () => {},
      onFocus: onValidFocus,
    };
  };

  const onValidKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    if (!validateText(e.nativeEvent.key, validator)) {
      e.preventDefault();
    }
  };

  const onValidChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    if (
      validateText(e.nativeEvent.text, validator) ||
      e.nativeEvent.text === ""
    ) {
      if (onChange) {
        onChange(e, e.nativeEvent.text);
      }
    } else {
      e.preventDefault();
    }
  };

  const onValidBlur = (
    e: NativeSyntheticEvent<TextInputFocusEventData>,
  ): void => {
    setIsFocus(false);

    if (onBlur) {
      onBlur(e, e.nativeEvent.text);
    }
  };

  const onValidFocus = (
    event: NativeSyntheticEvent<TextInputFocusEventData>,
  ) => {
    setIsFocus(true);
    if (onFocus) {
      onFocus(event as any);
    }
  };

  const editable = !(disabled || readOnly);

  let inputProps = {
    ...getEventHandlers(),
    editable,
  };

  if (validator) {
    inputProps = {
      ...getValidationEventHandlers(),
      editable,
    };
  }

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.textfield,
    {
      error: showError,
      disabled,
      focus: isFocus,
      size,
      textarea,
      ...extraProps,
    },
  );

  const maskedInputProps = useMaskedInputProps({
    value: value,
    onChangeText: (masked, unmasked) => {
      onChange?.(null, unmasked, masked);
    },
    mask: mask,
  });

  const extraPropsMasked = mask
    ? { ...maskedInputProps, onChange: () => {} }
    : {};

  return (
    <Block style={getCombinedStyle("container")}>
      <Slot
        style={getCombinedStyle("leftSlot")}
        icon={leftIcon as any}
        size={size}
      >
        {LeftSlot && <LeftSlot />}
      </Slot>
      {/*@ts-ignore*/}
      <TextInput
        ref={inputRef}
        testID={Platform.OS === platforms.ios ? id : undefined}
        accessibilityLabel={Platform.OS === platforms.android ? id : undefined}
        style={getCombinedStyle("element")}
        underlineColorAndroid="rgba(0,0,0,0)"
        autoCorrect={false}
        secureTextEntry={type === "password" ? true : false}
        placeholderTextColor={contextValue?.theme?.colors?.Gray[300]}
        multiline={textarea}
        numberOfLines={5}
        value={value}
        onChangeText={onChangeText}
        {...inputProps}
        {...extraProps}
        {...extraPropsMasked}
      />
      <Slot
        style={getCombinedStyle("rightSlot")}
        icon={rightIcon as any}
        size={size}
      >
        {RightSlot && <RightSlot />}
      </Slot>
      {(loading && loadingIcon) || null}
    </Block>
  );
};

// @ts-ignore
export default InputHOC(
  PhaselisHOC<TextFieldProps, TextfieldExtraProps>(TextField),
);
