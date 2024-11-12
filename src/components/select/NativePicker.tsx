import React, { useMemo } from "react";
import { ViewStyle } from "react-native";
import ReactNativePickerSelect from "react-native-picker-select";

interface NativePickerProps {
  refPicker: React.RefObject<ReactNativePickerSelect>;
  onChange: (e: any, value?: any, data?: any) => any;
  options: any[];
  value: any;
  elementStyles: ViewStyle;
  disabled?: boolean;
  placeholder?: string;
  doneText?: string;
  setIsFocus: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItem: any | undefined;
}

const NativePicker: React.FC<NativePickerProps> = ({
  refPicker,
  onChange,
  options,
  value,
  elementStyles,
  disabled,
  placeholder,
  doneText,
  selectedItem,
  setIsFocus,
}) => {
  const handleOnFocus = () => {
    setIsFocus(true);
  };

  const handleOnBlur = () => {
    setIsFocus(false);
  };

  const memorizedOptions = useMemo(() => {
    return options.map((option) => {
      return {
        ...option,
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ReactNativePickerSelect
      ref={refPicker}
      onValueChange={(value) => {
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
  );
};

export default NativePicker;
