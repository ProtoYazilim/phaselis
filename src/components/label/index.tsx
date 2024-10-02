import { View, Text } from "react-native";
import stylesheet from "./assets/styles";
import { PhaselisHOC } from "@phaselis/components/provider";
import { LabelProps } from "./types";
import { useCombinedStyle } from "@phaselis/hooks";

const Label = (props: LabelProps) => {
  const {
    text,
    style,
    numberOfLines = 1,
    adjustsFontSizeToFit,
    minimumFontScale,
    contextValue,
  } = props;

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.label,
    props as never,
  );

  return (
    <View style={getCombinedStyle("container")}>
      <Text
        numberOfLines={numberOfLines}
        style={getCombinedStyle("text")}
        adjustsFontSizeToFit={adjustsFontSizeToFit}
        minimumFontScale={minimumFontScale}
      >
        {text}
      </Text>
    </View>
  );
};

Label.displayName = "label";

export default PhaselisHOC<LabelProps, LabelExtraProps>(Label);
