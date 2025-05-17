import type { FC } from "react";
import type { LabelProps } from "./types";
import { Children } from "react";
import { View, Text } from "react-native";
import stylesheet from "./assets/styles";
import PhaselisHOC from "../provider/lib/hoc";
import { useCombinedStyle } from "../../hooks";

const Label: FC<LabelProps> = (props) => {
  const {
    text,
    numberOfLines = 1,
    adjustsFontSizeToFit,
    minimumFontScale,
    children,
    variation,
  } = props;

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    "label",
    variation,
    {
      ...props,
    },
  );

  return (
    <View style={getCombinedStyle("container")}>
      <Text
        numberOfLines={numberOfLines}
        style={getCombinedStyle("text")}
        adjustsFontSizeToFit={adjustsFontSizeToFit}
        minimumFontScale={minimumFontScale}
      >
        {children ? (
          Children.map(children, (child, index) => {
            if (typeof child === "string") {
              return (
                <Text key={index} style={getCombinedStyle("text", true)}>
                  {child}
                </Text>
              );
            } else {
              return child;
            }
          })
        ) : (
          <Text style={getCombinedStyle("text", true)}>{text}</Text>
        )}
      </Text>
    </View>
  );
};

Label.displayName = "Label";

export default PhaselisHOC(Label);
