import { Radio } from "@phaselis/components";
import { View } from "react-native";
import { PhaselisHOC } from "@phaselis/components";
import { useCombinedStyle } from "@phaselis/hooks";
import { stylesheet_picker_option_slot } from "../assets/styles";
import { OptionSlotProps } from "../types";

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

  const { getCombinedStyle, getFlattenStyle } = useCombinedStyle(
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
        <Radio
          onChange={(value) => {
            onChange?.(null, value, item);

            if (closeOnSelect) {
              setShowPicker?.(false);
            }
          }}
          checked={isSelected}
          partOfGroup={false}
          style={{
            outerElement: getFlattenStyle("outerElement"),
            innerElement: getFlattenStyle("innerElement"),
            text: getFlattenStyle("text"),
          }}
          text={item.label}
          value={item.value}
          size="md"
        />
      ) : null}
    </View>
  );
};

export default PhaselisHOC<OptionSlotProps, any>(OptionSlotDefault);
