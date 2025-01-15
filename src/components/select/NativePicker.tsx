import React, { useMemo } from "react";
import ReactNativePickerSelect from "react-native-picker-select";
import { PhaselisHOC } from "src/components/provider";
import stylesheet from "./assets/styles";
import { NativePickerProps } from "./types";
import { useCombinedStyle } from "src/hooks";

const NativePicker: React.FC<NativePickerProps> = ({
  refIOSPicker,
  refAndroidPicker,
  onChange,
  options,
  value,
  contextValue,
  disabled,
  placeholder,
  selectedItem,
  setIsFocus,
  style,
  showError,
  isFocus,
  size,
  variation = "default",
  ...extraProps
}) => {
  const handleOnFocus = () => {
    setIsFocus(true);
  };

  const handleOnBlur = () => {
    setIsFocus(false);
  };

  const { getFlattenStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.select,
    variation,
    {
      error: showError,
      disabled,
      focus: isFocus,
      size,
      ...extraProps,
    },
  );

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
        inputAndroid: getFlattenStyle("element"),
        inputIOS: getFlattenStyle("element"),
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

export default PhaselisHOC(NativePicker);
