import type { OptionSlotProps } from "../types";
import { View, Text, Pressable } from "react-native";
import { stylesheet_picker_option_slot } from "../assets/styles";
import PhaselisHOC from "../../provider/lib/hoc";
import { useCombinedStyle } from "../../../hooks";

const OptionSlotDefault = (props: OptionSlotProps) => {
  const { item, selectedItem, onChange, setShowPicker, closeOnSelect } = props;
  const isSelected = selectedItem?.value === item?.value;

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet_picker_option_slot,
    "select._picker._optionSlot",
    "default",
    { ...(props as any) },
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
          <Text
            style={[
              getCombinedStyle("text"),
              isSelected && getCombinedStyle("selectedText"),
            ]}
          >
            {item.label}
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
};

export default PhaselisHOC(OptionSlotDefault);
