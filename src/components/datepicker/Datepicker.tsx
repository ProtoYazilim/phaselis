import React, { useEffect, useState } from "react";
import { Pressable, Text } from "react-native";
import stylesheet from "./assets/styles";
import { DatepickerProps } from "./types";
import CoreDatePicker from "react-native-date-picker";
import { PhaselisHOC } from "src/components/provider";
import { format as formatFns } from "date-fns";
import { InputHOC } from "src/utils/lib/hocs";
import { useCombinedStyle } from "src/hooks";
import Slot from "src/components/slot";

const Datepicker: React.FC<DatepickerProps> = (props) => {
  const {
    style,
    contextValue,
    size = "md",
    leftIcon,
    LeftSlot,
    rightIcon = "CalendarDays",
    RightSlot,
    mode = "date",
    minDate,
    maxDate,
    locale = "TR_tr",
    format = "dd.MM.yyyy",
    value,
    disabled = false,
    variation = "default",
    ...extraProps
  } = props;
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  const [date, setDate] = useState(value || new Date());

  useEffect(() => {
    setDate(value || new Date());
  }, [value]);

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.datepicker,
    variation,
    { size, focus: show, disabled, ...extraProps },
  );

  const renderInput = () => {
    return (
      <Pressable
        style={getCombinedStyle("container")}
        onPress={toggle}
        disabled={disabled}
      >
        <Slot
          style={getCombinedStyle("leftSlot")}
          icon={leftIcon as any}
          size={size}
        >
          {LeftSlot && <LeftSlot />}
        </Slot>
        <Text style={getCombinedStyle("element")}>
          {formatFns(date, format)}
        </Text>
        <Slot
          style={getCombinedStyle("rightSlot")}
          icon={rightIcon as any}
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
        onConfirm={(date) => {
          setDate(date);
          props.onChange?.(null, date);
          setShow(false);
        }}
        maximumDate={maxDate}
        minimumDate={minDate}
        locale={locale}
        mode={mode}
        theme="auto"
        title="Select a Date"
        confirmText="Confirm"
        cancelText="Cancel"
        buttonColor={contextValue?.theme?.colors?.Primary[500]}
        dividerColor="black"
      />
    </>
  );
};

export default InputHOC(PhaselisHOC<DatepickerProps>(Datepicker));
