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
    style,
    numberOfLines = 1,
    adjustsFontSizeToFit,
    minimumFontScale,
    contextValue,
    children,
    variation,
  } = props;

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.label,
    variation,
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
        {children ? (
          Children.map(children, (child, index) => {
            if (typeof child === "string") {
              return (
                <Text key={index} style={getCombinedStyle("text")}>
                  {child}
                </Text>
              );
            } else {
              return child;
            }
          })
        ) : (
          <Text style={getCombinedStyle("text")}>{text}</Text>
        )}
      </Text>
    </View>
  );
};

Label.displayName = "label";

export default PhaselisHOC(Label);
