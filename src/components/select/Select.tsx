import type { FC } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { View } from "react-native";
import PhaselisHOC from "../provider/lib/hoc";
import ReactNativePickerSelect from "react-native-picker-select";
import type { SelectProps } from "./types";
import CustomPicker from "./CustomPicker";
import NativePicker from "./NativePicker";
import InputSlotDefault from "./lib/InputSlotDefault";
import { cloneSlot, InputHOC } from "../../utils";

const Select: FC<SelectProps> = ({
  style,
  options = [],
  placeholder = "Please Select",
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
  InputSlot = <InputSlotDefault />,
  OptionSlot,
  HeaderSlot,
  maxHeightModal,
  fullScreenModal,
  closeOnSelect = true,
  NoOptionSlot,
  closeIcon,
  closeIconSize,
  CloseIconSlot,
  ...extraProps
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const refAndroidPicker = useRef<ReactNativePickerSelect>(null);
  const refIOSPicker = useRef<ReactNativePickerSelect>(null);
  const [innerValue, setInnerValue] = useState(value);

  const handleOnChange = (e: any, newValue: string) => {
    setInnerValue(newValue);
    onChange?.(e, newValue);
  };

  const showError = useMemo(() => {
    return isChanged && isUsed && error ? true : false;
  }, [error, isUsed, isChanged]);

  const selectedItem = useMemo(() => {
    return options?.find((option) => option.value === innerValue);
  }, [options, innerValue]);

  useEffect(() => {
    if (value !== innerValue) {
      setInnerValue(value);
    }
  }, [innerValue, value]);

  return (
    <>
      {cloneSlot(InputSlot, {
        selectedItem,
        placeholder,
        rightIcon,
        RightSlot,
        leftIcon,
        LeftSlot,
        size,
        disabled,
        refAndroidPicker,
        refIOSPicker,
        setShowPicker,
        style,
        showError,
        isFocus,
        ...extraProps,
      })}
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
            refIOSPicker={refIOSPicker}
            refAndroidPicker={refAndroidPicker}
            onChange={handleOnChange}
            options={options}
            value={innerValue}
            disabled={disabled}
            placeholder={placeholder}
            doneText={doneText}
            selectedItem={selectedItem}
            setIsFocus={setIsFocus}
            showError={showError}
            isFocus={isFocus}
            size={size}
          />
        ) : (
          <CustomPicker
            showPicker={showPicker}
            setShowPicker={setShowPicker}
            setIsFocus={setIsFocus}
            maxHeightModal={maxHeightModal}
            fullScreenModal={fullScreenModal}
            options={options}
            HeaderSlot={HeaderSlot}
            closeIcon={closeIcon}
            closeIconSize={closeIconSize}
            CloseIconSlot={CloseIconSlot}
            OptionSlot={OptionSlot}
            onChange={handleOnChange}
            selectedItem={selectedItem}
            closeOnSelect={closeOnSelect}
            NoOptionSlot={NoOptionSlot}
            disabled={disabled}
          />
        )}
      </View>
    </>
  );
};

Select.displayName = "Select";

export default InputHOC(PhaselisHOC(Select));
