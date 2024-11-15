import React, { useMemo } from "react";
import { StyleSheet } from "react-native";
import ReactNativePickerSelect from "react-native-picker-select";
import { useCombinedStyle } from "@phaselis/hooks";
import { PhaselisHOC } from "@phaselis/components";
import stylesheet from "./assets/styles";
import { NativePickerProps } from "./types";

const NativePicker: React.FC<NativePickerProps> = ({
  refIOSPicker,
  refAndroidPicker,
  onChange,
  options,
  value,
  contextValue,
  disabled,
  placeholder,
  doneText,
  selectedItem,
  setIsFocus,
  style,
  showError,
  isFocus,
  size,
  ...extraProps
}) => {
  const handleOnFocus = () => {
    setIsFocus(true);
  };

  const handleOnBlur = () => {
    setIsFocus(false);
  };

  const { themeStyles, defaultStyles, propStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.select,
    {
      error: showError,
      disabled,
      focus: isFocus,
      size,
      ...extraProps,
    },
  );

  const elementStyles = StyleSheet.flatten([
    defaultStyles?.element,
    themeStyles?.element,
    propStyle?.element,
  ]);

  const memorizedOptions = useMemo(() => {
    return options?.map((option) => {
      return {
        ...option,
      };
    });
  }, [options]);

  return (
    <ReactNativePickerSelect
      ref={refIOSPicker}
      pickerProps={{
        // @ts-ignore
        ref: refAndroidPicker,
        onFocus: handleOnFocus,
        onBlur: handleOnBlur,
      }}
      onValueChange={(value) => {
        onChange &&
          onChange(
            {
              target: {
                value: value,
              },
            },
            value,
            selectedItem,
          );
      }}
      items={memorizedOptions}
      value={value}
      style={{
        headlessAndroidContainer: {
          width: "100%",
        },
        inputIOSContainer: {
          width: "100%",
        },
        inputAndroidContainer: {
          width: "100%",
        },
        inputAndroid: elementStyles,
        inputIOS: elementStyles,
      }}
      useNativeAndroidPickerStyle={false}
      fixAndroidTouchableBug={true}
      onOpen={handleOnFocus}
      onClose={handleOnBlur}
      disabled={disabled}
      placeholder={
        placeholder
          ? {
              label: placeholder,
              value: null,
            }
          : undefined
      }
    />
  );
};

export default PhaselisHOC<NativePickerProps, any>(NativePicker);
