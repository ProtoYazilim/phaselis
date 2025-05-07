import type { NoOptionSlotProps } from "../types";
import { View, Text } from "react-native";
import { stylesheet_picker_no_option } from "../assets/styles";
import PhaselisHOC from "../../provider/lib/hoc";
import { useCombinedStyle } from "../../../hooks";

const NoOptionSlotDefault = (props: NoOptionSlotProps) => {
  const { text = "No option avaliable." } = props;
  const { getCombinedStyle } = useCombinedStyle(
    stylesheet_picker_no_option,
    "select._picker._noOptionSlot",
    "default",
    { ...(props as any) },
  );

  return (
    <View style={getCombinedStyle("container")}>
      <Text style={getCombinedStyle("text")}>{text}</Text>
    </View>
  );
};

export default PhaselisHOC(NoOptionSlotDefault);
