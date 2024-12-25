import { View, Text } from "react-native";
import { stylesheet_picker_no_option } from "../assets/styles";
import { PhaselisHOC, useCombinedStyle } from "phaselis";
import { NoOptionSlotProps } from "../types";

const NoOptionSlotDefault = ({
  text = "No option avaliable.",
  style,
  contextValue,
}: NoOptionSlotProps) => {
  const { getCombinedStyle } = useCombinedStyle(
    stylesheet_picker_no_option,
    style,
    contextValue?.theme?.select?._picker?._noOptionSlot,
  );

  return (
    <View style={getCombinedStyle("container")}>
      <Text style={getCombinedStyle("text")}>{text}</Text>
    </View>
  );
};

export default PhaselisHOC(NoOptionSlotDefault);
