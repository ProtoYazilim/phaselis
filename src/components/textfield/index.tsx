import type { TextfieldProps } from "./types";
import type {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputFocusEventData,
  TextInputKeyPressEventData,
} from "react-native";
import { useState, useRef, useMemo } from "react";
import { Platform, TextInput } from "react-native";
import stylesheet from "./assets/styles";
import PhaselisHOC from "../provider/lib/hoc";
import { Block, Slot } from "../index";
import { useMaskedInputProps } from "react-native-mask-input";
import { validateText, InputHOC } from "../../utils";
import { useCombinedStyle } from "../../hooks";

const Textfield: React.FC<TextfieldProps> = ({
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
  size = "md",
  isChanged,
  isUsed,
  leftIcon,
  rightIcon,
  value,
  mask,
  textarea,
  onChangeText,
  variation = "default",
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
    variation,
    {
      error: showError,
      disabled,
      focus: isFocus,
      size,
      textarea,
      ...extraProps,
    },
  );

  const { getFlattenStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.textfield,
    variation,
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
      //@ts-ignore TODO: fix this
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
        spellCheck={false}
        secureTextEntry={type === "password" ? true : false}
        placeholderTextColor={getFlattenStyle("element").color}
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
export default InputHOC(PhaselisHOC(Textfield));
