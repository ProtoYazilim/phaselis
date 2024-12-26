import { View, Text, Pressable } from "react-native";
import { PhaselisHOC } from "src/components/provider";
import { stylesheet_picker_option_slot } from "../assets/styles";
import { OptionSlotProps } from "../types";
import { useCombinedStyle } from "src/hooks";

const OptionSlotDefault = ({
  item,
  selectedItem,
  onChange,
  setShowPicker,
  closeOnSelect,
  style,
  contextValue,
}: OptionSlotProps) => {
  const isSelected = selectedItem?.value === item?.value;

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet_picker_option_slot,
    style,
    contextValue?.theme?.select?._picker?._optionSlot,
  );

  return (
    <View
      style={[
        getCombinedStyle("container"),
        isSelected && getCombinedStyle("selected"),
      ]}
    >
      {item ? (
        <Pressable
          onPress={() => {
            onChange?.(null, item?.value, item);
            if (closeOnSelect) {
              setShowPicker?.(false);
            }
          }}
        >
          <Text>{item.label}</Text>
        </Pressable>
      ) : null}
    </View>
  );
};

export default PhaselisHOC(OptionSlotDefault);
