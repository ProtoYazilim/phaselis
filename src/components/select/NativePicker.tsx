import type { NativePickerProps } from "./types";
import { useMemo } from "react";
import ReactNativePickerSelect from "react-native-picker-select";
import PhaselisHOC from "../provider/lib/hoc";
import stylesheet from "./assets/styles";
import { useCombinedStyle } from "../../hooks";
import { useTheme } from "../provider";

const NativePicker: React.FC<NativePickerProps> = (props) => {
  const {
    refIOSPicker,
    refAndroidPicker,
    onChange,
    options,
    value,
    disabled,
    placeholder,
    selectedItem,
    setIsFocus,
    showError,
    isFocus,
    size,
    variation = "default",
    darkMode,
    doneText,
  } = props;
  const handleOnFocus = () => {
    setIsFocus(true);
  };

  const handleOnBlur = () => {
    setIsFocus(false);
  };

  const { themeName } = useTheme();

  const darkModeHandler = useMemo(() => {
    if (typeof darkMode !== "undefined") {
      return darkMode;
    }
    return themeName === "dark";
  }, [darkMode, themeName]);

  const { getFlattenStyle } = useCombinedStyle(
    stylesheet,
    "select",
    variation,
    {
      ...props,
      error: showError,
      disabled,
      focus: isFocus,
      size,
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
      key={`picker-${themeName}`}
      ref={refIOSPicker}
      darkTheme={darkModeHandler}
      pickerProps={{
        // @ts-ignore
        ref: refAndroidPicker,
        onFocus: handleOnFocus,
        onBlur: handleOnBlur,
      }}
      onValueChange={(newValue) => {
        onChange &&
          onChange(
            {
              target: {
                value: newValue,
              },
            },
            newValue,
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
        inputAndroid: getFlattenStyle("element", true),
        inputIOS: getFlattenStyle("element", true),
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
      doneText={doneText}
    />
  );
};

export default PhaselisHOC(NativePicker);
