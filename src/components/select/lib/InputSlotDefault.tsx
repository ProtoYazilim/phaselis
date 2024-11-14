import { Slot } from "@phaselis/components";
import { Text, View, Pressable } from "react-native";
import { PhaselisHOC } from "@phaselis/components";
import { useCombinedStyle } from "@phaselis/hooks";
import stylesheet from "../assets/styles";
import { InputSlotProps } from "../types";

const InputSlotDefault = ({
  selectedItem,
  placeholder,
  rightIcon = "ChevronDown",
  rightIconSize,
  RightIconSlot,
  leftIcon,
  leftIconSize,
  LeftIconSlot,
  disabled,
  refAndroidPicker,
  refIOSPicker,
  setShowPicker,
  style,
  contextValue,
  showError,
  isFocus,
  size,
  ...extraProps
}: InputSlotProps) => {
  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.select?._picker?._inputSlot,
    {
      error: showError,
      disabled,
      focus: isFocus,
      size,
      ...extraProps,
    },
  );

  return (
    <Pressable
      style={{ flex: 1 }}
      disabled={disabled}
      onPress={() => {
        refAndroidPicker.current?.focus(true);
        refIOSPicker.current?.togglePicker(true);
        setShowPicker?.(true);
      }}
    >
      <View style={getCombinedStyle("container")}>
        <Slot
          style={getCombinedStyle("leftSlot")}
          icon={leftIcon as any}
          size={leftIconSize}
        >
          {LeftIconSlot && <LeftIconSlot />}
        </Slot>
        <Text style={getCombinedStyle("element")}>
          {selectedItem?.label ? selectedItem?.label : placeholder}
        </Text>
        <View>
          <Slot
            style={getCombinedStyle("rightSlot")}
            icon={rightIcon as any}
            size={rightIconSize}
          >
            {RightIconSlot && <RightIconSlot />}
          </Slot>
        </View>
      </View>
    </Pressable>
  );
};

export default PhaselisHOC<InputSlotProps, any>(InputSlotDefault);
