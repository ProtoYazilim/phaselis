import React, { useMemo } from "react";
import { View, Text } from "react-native";
import stylesheet from "./assets/styles";
import { BadgeProps } from "./types";
import { useCombinedStyle } from "src/hooks";
import Slot from "src/components/slot";
import { PhaselisHOC } from "src/components/provider";

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
        <View style={[getCombinedStyle("element"), absoluteMesurements]}>
          <Slot
            style={[getCombinedStyle("leftIcon"), !text && { marginRight: 0 }]}
            icon={leftIcon}
          />
          {text && <Text style={getCombinedStyle("text")}>{text}</Text>}
          <Slot
            style={[getCombinedStyle("rightIcon"), !text && { marginLeft: 0 }]}
            icon={rightIcon}
          />
        </View>
      </View>
    </View>
  );
};

export default PhaselisHOC(Badge);
