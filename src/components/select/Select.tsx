import React, { FC, useMemo, useRef, useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { PhaselisHOC } from "@phaselis/components/provider";
import ReactNativePickerSelect from "react-native-picker-select";
import { InputHOC } from "@phaselis/utils";
import stylesheet from "./assets/styles";
import { SelectProps } from "./types";
import { Slot } from "@phaselis/components";
import { useCombinedStyle } from "@phaselis/hooks";
import CustomPicker from "./CustomPicker";
import NativePicker from "./NativePicker";

const Select: FC<SelectProps> = ({
  contextValue,
  style,
  options = [],
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
  doneText,
  pickerType = "native",
  InputSlot,
  OptionSlot,
  HeaderSlot,
  maxHeightModal,
  fullScreenModal,
  closeOnSelect = true,
  NoOptionSlot,
  closeIcon = "X",
  closeIconSize = "md",
  CloseIconSlot,
  ...extraProps
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const refPicker = useRef<ReactNativePickerSelect>(null);

  const showError = useMemo(() => {
    return isChanged && isUsed && error ? true : false;
  }, [error, isUsed, isChanged]);

  const selectedItem = useMemo(() => {
    return options.find((option) => option.value === value);
  }, [value, options]);

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

  const renderHelperInput = (): React.ReactNode => {
    if (true) {
      return (
        <Pressable
          style={{ flex: 1 }}
          disabled={disabled}
          onPress={() => {
            refPicker.current?.togglePicker(true);
            setShowPicker(true);
          }}
        >
          {pickerType === "custom" && InputSlot ? (
            <InputSlot
              defaultStyle={getCombinedStyle("element")}
              selectedItem={selectedItem}
            />
          ) : (
            <Text style={getCombinedStyle("element")}>
              {selectedItem?.label || placeholder}
            </Text>
          )}
          <View
            style={{
              flex: 1,
              width: 0,
              height: 0,
              opacity: 0,
              position: "absolute",
              zIndex: -1,
            }}
          >
            {pickerType === "native" ? (
              <NativePicker
                refPicker={refPicker}
                onChange={onChange}
                options={options}
                value={value}
                elementStyles={elementStyles}
                disabled={disabled}
                placeholder={placeholder}
                doneText={doneText}
                selectedItem={selectedItem}
                setIsFocus={setIsFocus}
              />
            ) : (
              <CustomPicker
                showPicker={showPicker}
                setShowPicker={setShowPicker}
                maxHeightModal={maxHeightModal}
                fullScreenModal={fullScreenModal}
                options={options}
                HeaderSlot={HeaderSlot}
                closeIcon={closeIcon}
                closeIconSize={closeIconSize}
                CloseIconSlot={CloseIconSlot}
                OptionSlot={OptionSlot}
                onChange={onChange}
                selectedItem={selectedItem}
                getCombinedStyle={getCombinedStyle}
                closeOnSelect={closeOnSelect}
                NoOptionSlot={NoOptionSlot}
              />
            )}
          </View>
        </Pressable>
      );
    }
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
      {renderHelperInput()}
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
