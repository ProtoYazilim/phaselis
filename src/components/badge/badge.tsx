import React, { useMemo } from "react";
import { View, Text } from "react-native";
import stylesheet from "./assets/styles";
import { PhaselisHOC } from "@phaselis/components/provider";
import { useCombinedStyle } from "@phaselis/hooks";
import { Slot } from "@phaselis/components";
import { BadgeProps } from "./types";

const Badge: React.FC<BadgeProps> = ({
  text,
  children,
  style,
  contextValue,
  top,
  bottom,
  right,
  left,
  leftIcon,
  rightIcon,
  size = "md",
  variation = "primary",
  ...extraProps
}) => {
  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.badge,
    variation,
    {
      size,
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
          <Slot style={getCombinedStyle("leftIcon")} icon={leftIcon} />
          {text && <Text style={getCombinedStyle("text")}>{text}</Text>}
          <Slot style={getCombinedStyle("rightIcon")} icon={rightIcon} />
        </View>
      </View>
    </View>
  );
};

export default PhaselisHOC<BadgeProps, BadgeExtraProps>(Badge);
