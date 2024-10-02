import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import stylesheet from "./assets/styles";
import { PhaselisHOC } from "@phaselis/components/provider";
import { InputHOC } from "@phaselis/utils";
import { useCombinedStyle } from "@phaselis/hooks";
import { DatepickerProps } from "./types";
import CoreDatePicker from "react-native-date-picker";
import { Slot } from "@phaselis/components";
import { format as formatFns } from "date-fns";

const Datepicker: React.FC<DatepickerProps> = (props) => {
  const {
    style,
    contextValue,
    inputMode,
    size = "md",
    leftIcon,
    LeftSlot,
    rightIcon = "CalendarDays",
    RightSlot,
    value,
    mode = "date",
    minDate,
    maxDate,
    locale = "TR_tr",
    format = "dd.MM.yyyy",
    onChange,
    ...extraProps
  } = props;
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  const [date, setDate] = useState(new Date());

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.datepicker,
    { size, focus: show, ...extraProps },
  );

  const renderInput = () => {
    return (
      <Pressable style={getCombinedStyle("container")} onPress={toggle}>
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
        maximumDate={minDate}
        minimumDate={maxDate}
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
