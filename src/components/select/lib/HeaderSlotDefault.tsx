import Slot from "@phaselis/components/slot";
import { View, Text, Pressable } from "react-native";
import { cloneSlot } from "@phaselis/utils/lib/util";
import { PhaselisHOC } from "@phaselis/components";
import { useCombinedStyle } from "@phaselis/hooks";
import { stylesheet_picker_header } from "../assets/styles";
import { HeaderSlotProps, CloseIconSlotProps } from "../types";

const CloseIconSlotDefault = ({
  setShowPicker,
  closeIcon = "Check",
  closeIconSize = "md",
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
      <View style={getCombinedStyle("closeIconSlot")}>
        <Slot
          style={getCombinedStyle("closeIcon")}
          icon={closeIcon as any}
          size={closeIconSize}
          strokeWidth={3}
        ></Slot>
      </View>
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
    <View
      style={[
        getCombinedStyle("container"),
        !closeOnSelect && { justifyContent: "space-between" },
      ]}
    >
      <Text style={getCombinedStyle("text")}>{text}</Text>
      {!closeOnSelect
        ? cloneSlot(CloseIconSlot, {
            setShowPicker,
            closeIcon,
            closeIconSize,
            contextValue,
          })
        : null}
    </View>
  );
};

export default PhaselisHOC<HeaderSlotProps, any>(HeaderSlotDefault);
