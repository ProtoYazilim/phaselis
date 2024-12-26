import { View, Text, Pressable } from "react-native";
import { stylesheet_picker_header } from "../assets/styles";
import { HeaderSlotProps, CloseIconSlotProps } from "../types";
import Slot from "src/components/slot";
import { PhaselisHOC } from "src/components/provider";
import { useCombinedStyle } from "src/hooks";
import { cloneSlot } from "src/utils";

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
