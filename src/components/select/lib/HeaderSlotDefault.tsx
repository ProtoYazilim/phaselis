import type { HeaderSlotProps, CloseIconSlotProps } from "../types";
import { View, Text, Pressable } from "react-native";
import { stylesheet_picker_header } from "../assets/styles";
import PhaselisHOC from "../../provider/lib/hoc";
import { Slot } from "../../index";
import { useCombinedStyle } from "../../../hooks";
import { cloneSlot } from "../../../utils";

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
        />
      </View>
    </Pressable>
  );
};

const HeaderSlotDefault = ({
  text = "Select Title",
  setShowPicker,
  closeIcon,
  closeIconSize,
  CloseIconSlot = <CloseIconSlotDefault />,
  closeOnSelect,
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
