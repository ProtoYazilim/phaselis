import React, { useMemo } from "react";
import { View, Text, ViewStyle, TextStyle } from "react-native";
import stylesheet from "./assets/styles";
import { PhaselisHOC } from "@phaselis/components/provider";
import { useCombinedStyle } from "@phaselis/hooks";

interface BadgeProps {
  text: string;
  children: any;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  outline?: boolean;
  style?: {
    container?: ViewStyle;
    element?: ViewStyle;
    text?: TextStyle;
  };
  contextValue?: any;
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
}

const Badge: React.FC<BadgeProps> = ({
  text,
  children,
  primary,
  secondary,
  tertiary,
  style,
  outline,
  contextValue,
  top,
  bottom,
  right,
  left,
  ...extraProps
}) => {
  const getVariation = () => {
    if (primary) {
      return "primary";
    }
    if (secondary) {
      return "secondary";
    }
    if (tertiary) {
      return "tertiary";
    }
    return "tertiary";
  };

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.badge,
    {
      outline: outline && getVariation(),
      base: getVariation(),
      ...extraProps,
    },
  );

  function removeEmptyFields(obj: any) {
    for (let key in obj) {
      if (obj[key] === null || obj[key] === undefined || obj[key] === "") {
        delete obj[key];
      }
    }
    return obj;
  }

  const absoluteMesurements = useMemo(() => {
    const alignment = {
      top: top,
      bottom: bottom,
      right: right,
      left: left,
    };
    return removeEmptyFields(alignment);
  }, [left, top, right, bottom]);

  return (
    <View style={getCombinedStyle("container")}>
      <>{children}</>
      <View
        style={{
          justifyContent: "flex-start",
          flexDirection: "row",
        }}
      >
        <View style={[...getCombinedStyle("element"), absoluteMesurements]}>
          <Text style={getCombinedStyle("text")}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

export default PhaselisHOC<BadgeProps, BadgeExtraProps>(Badge);
