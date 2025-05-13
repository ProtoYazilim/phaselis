import type { DatepickerProps } from "./types";
import { useEffect, useState, type FC } from "react";
import { Pressable, Text } from "react-native";
import stylesheet from "./assets/styles";
import CoreDatePicker from "react-native-date-picker";
import PhaselisHOC from "../provider/lib/hoc";
import { Slot, useColors, useTheme } from "../index";
import { format as formatFns } from "date-fns";
import { InputHOC } from "../../utils";
import { useCombinedStyle } from "../../hooks";
import type { PhaselisColors } from "../../theme";

const Datepicker: FC<DatepickerProps> = (props) => {
  const {
    size = "md",
    leftIcon,
    LeftSlot,
    rightIcon,
    rightIconVisible = true,
    RightSlot,
    mode = "date",
    minDate,
    maxDate,
    locale = "TR_tr",
    format = "dd.MM.yyyy",
    value,
    disabled = false,
    variation = "default",
    theme,
    error,
  } = props;
  const [show, setShow] = useState(false);

  const { themeName } = useTheme();
  const activeTheme = theme || themeName;
  const Colors = useColors<PhaselisColors>();

  const rightIconName = rightIconVisible
    ? rightIcon || "CalendarDays"
    : undefined;

  const toggle = () => {
    setShow(!show);
  };

  const [date, setDate] = useState(value || new Date());

  useEffect(() => {
    setDate(value || new Date());
  }, [value]);

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    "datepicker",
    variation,
    { ...props, size, focus: show, disabled, error },
  );

  const renderInput = () => {
    return (
      <Pressable
        style={getCombinedStyle("container")}
        onPress={toggle}
        disabled={disabled}
      >
        <Slot style={getCombinedStyle("leftSlot")} icon={leftIcon} size={size}>
          {LeftSlot && <LeftSlot />}
        </Slot>
        <Text style={getCombinedStyle("element", true)}>
          {formatFns(date, format)}
        </Text>
        <Slot
          style={getCombinedStyle("rightSlot")}
          icon={rightIconName}
          size={size}
        >
          {RightSlot && <RightSlot />}
        </Slot>
      </Pressable>
    );
  };

  return (
    <>
      {renderInput()}
      <CoreDatePicker
        date={date}
        modal
        open={show}
        onCancel={() => {
          setShow(false);
        }}
        onConfirm={(newDate) => {
          setDate(newDate);
          props.onChange?.(null, newDate);
          setShow(false);
        }}
        maximumDate={maxDate}
        minimumDate={minDate}
        locale={locale}
        mode={mode}
        theme={activeTheme}
        title="Select a Date"
        confirmText="Confirm"
        cancelText="Cancel"
        buttonColor={Colors.Primary[500]}
        dividerColor="black"
      />
    </>
  );
};

export default InputHOC(PhaselisHOC<DatepickerProps>(Datepicker));
