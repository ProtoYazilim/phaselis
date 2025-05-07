import type { InputSlotProps } from "../types";
import { Text, View, Pressable, Platform } from "react-native";
import stylesheet from "../assets/styles";
import PhaselisHOC from "../../provider/lib/hoc";
import { Slot } from "../../index";
import { useCombinedStyle } from "../../../hooks";

const InputSlotDefault = (props: InputSlotProps) => {
  const {
    selectedItem,
    placeholder,
    rightIcon = "ChevronDown",
    RightIconSlot,
    leftIcon,
    LeftIconSlot,
    disabled,
    refAndroidPicker,
    refIOSPicker,
    setShowPicker,
    showError,
    isFocus,
    size,
    variation = "default",
  } = props;

  const { getCombinedStyle, getFlattenStyle } = useCombinedStyle(
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

  return (
    <Pressable
      disabled={disabled}
      style={getCombinedStyle("container")}
      onPress={() => {
        const nativeFocusFunction = Platform.select({
          ios: () => refIOSPicker.current?.togglePicker(true),
          android: () => refAndroidPicker.current?.focus(true),
        });
        nativeFocusFunction?.();
        setShowPicker?.(true);
      }}
    >
      <Slot
        style={getCombinedStyle("leftSlot")}
        icon={leftIcon as any}
        width={getCombinedStyle("leftSlot").width}
        height={getCombinedStyle("leftSlot").height}
      >
        {LeftIconSlot && <LeftIconSlot />}
      </Slot>
      <Text
        style={getCombinedStyle("element", true)}
        numberOfLines={getFlattenStyle("element").numberOfLines}
      >
        {selectedItem?.label ? selectedItem?.label : placeholder}
      </Text>
      <View>
        <Slot
          style={getCombinedStyle("rightSlot")}
          icon={rightIcon as any}
          width={getCombinedStyle("rightSlot").width}
          height={getCombinedStyle("rightSlot").height}
        >
          {RightIconSlot && <RightIconSlot />}
        </Slot>
      </View>
    </Pressable>
  );
};

export default PhaselisHOC(InputSlotDefault);
