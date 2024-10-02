import React, { FC, useMemo, useRef, useState } from "react";
import { View, ViewStyle, StyleSheet } from "react-native";
import { PhaselisHOC } from "@phaselis/components/provider";
import ReactNativePickerSelect from "react-native-picker-select";
import { InputHOC } from "@phaselis/utils";
import stylesheet from "./assets/styles";
import { SelectProps } from "./types";
import { Slot } from "@phaselis/components";
import { useCombinedStyle } from "@phaselis/hooks";

const Select: FC<SelectProps> = ({
  contextValue,
  style,
  options,
  valueField = "value",
  displayField = "label",
  placeholder = "Select an option",
  value,
  onChange,
  error,
  disabled,
  LeftSlot,
  RightSlot,
  leftIcon,
  rightIcon = "ChevronDown",
  size = "md",
  isChanged,
  isUsed,
  ...extraProps
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const refPicker = useRef<ReactNativePickerSelect>(null);

  const showError = useMemo(() => {
    return isChanged && isUsed && error ? true : false;
  }, [error, isUsed, isChanged]);

  const memorizedOptions = useMemo(() => {
    return options.map((option) => {
      return {
        label: option[displayField],
        value: option[valueField],
      };
    });
  }, [options, valueField, displayField]);

  const selectedItem = useMemo(() => {
    return memorizedOptions.find((option) => option.value === value);
  }, [value, memorizedOptions]);

  const { getCombinedStyle, themeStyles, defaultStyles, propStyle } =
    useCombinedStyle(stylesheet, style, contextValue?.theme?.select, {
      error: showError,
      disabled,
      focus: isFocus,
      size,
      ...extraProps,
    });

  const elementStyles = StyleSheet.flatten([
    defaultStyles?.element,
    themeStyles?.element,
    propStyle?.element,
  ]);

  const handleOnFocus = () => {
    setIsFocus(true);
  };

  const handleOnBlur = () => {
    setIsFocus(false);
  };

  return (
    <View style={getCombinedStyle("container")}>
      <Slot
        style={getCombinedStyle("leftSlot")}
        icon={leftIcon as any}
        size={size}
      >
        {LeftSlot && <LeftSlot />}
      </Slot>
      <View
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        <ReactNativePickerSelect
          ref={refPicker}
          onValueChange={(value, index) => {
            if (onChange) {
              onChange(
                {
                  target: {
                    value: value,
                  },
                },
                value,
                selectedItem,
              );
            }
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
            inputAndroid: {
              ...(elementStyles as ViewStyle),
            },
            inputIOS: {
              ...(elementStyles as ViewStyle),
            },
          }}
          Icon={() => null}
          useNativeAndroidPickerStyle={false}
          fixAndroidTouchableBug={true}
          onOpen={handleOnFocus}
          onClose={handleOnBlur}
          pickerProps={{
            onFocus: handleOnFocus,
            onBlur: handleOnBlur,
          }}
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
      </View>
      <Slot
        style={getCombinedStyle("rightSlot")}
        icon={rightIcon as any}
        size={size}
      >
        {RightSlot && <RightSlot />}
      </Slot>
    </View>
  );
};

Select.displayName = "Select";

export default InputHOC(PhaselisHOC<SelectProps, SelectExtraProps>(Select));
