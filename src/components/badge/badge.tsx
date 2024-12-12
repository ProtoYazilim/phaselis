import React, { useMemo } from "react";
import { View, Text } from "react-native";
import stylesheet from "./assets/styles";
import { PhaselisHOC } from "@phaselis/components/provider";
import { useCombinedStyle } from "@phaselis/hooks";
import { BadgeProps } from "./types";

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
    "default",
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
