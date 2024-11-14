import Slot from "@phaselis/components/slot";
import { View, Text, Pressable } from "react-native";
import { cloneSlot } from "@phaselis/utils/lib/util";
import { PhaselisHOC } from "@phaselis/components";
import { useCombinedStyle } from "@phaselis/hooks";
import { stylesheet_picker_header } from "../assets/styles";
import { HeaderSlotProps, CloseIconSlotProps } from "../types";

const CloseIconSlotDefault = ({
  setShowPicker,
  closeIcon = "X",
  closeIconSize = "xl",
  style,
  contextValue,
}: CloseIconSlotProps) => {
  const { getCombinedStyle } = useCombinedStyle(
    stylesheet_picker_header,
    style,
    contextValue?.theme?.select?._picker?._header,
  );
  return (
    <Pressable
      onPress={() => {
        setShowPicker?.(false);
      }}
    >
      <Slot
        style={getCombinedStyle("closeIconSlot")}
        icon={closeIcon as any}
        size={closeIconSize}
      ></Slot>
    </Pressable>
  );
};

const HeaderSlotDefault = ({
  text = "Option Selection",
  setShowPicker,
  closeIcon,
  closeIconSize,
  CloseIconSlot = <CloseIconSlotDefault />,
  closeOnSelect,
  doneText = "Done",
  contextValue,
  style,
}: HeaderSlotProps) => {
  const { getCombinedStyle } = useCombinedStyle(
    stylesheet_picker_header,
    style,
    contextValue?.theme?.select?._picker?._header,
  );

  return (
    <>
      {cloneSlot(CloseIconSlot, {
        setShowPicker,
        getCombinedStyle,
        closeIcon,
        closeIconSize,
      })}
      <View style={getCombinedStyle("container")}>
        <Text style={getCombinedStyle("text")}>{text}</Text>
      </View>
      {!closeOnSelect ? (
        <Pressable
          onPress={() => {
            setShowPicker?.(false);
          }}
        >
          <Text style={getCombinedStyle("doneText")}>{doneText}</Text>
        </Pressable>
      ) : null}
    </>
  );
};

export default PhaselisHOC<HeaderSlotProps, any>(HeaderSlotDefault);
