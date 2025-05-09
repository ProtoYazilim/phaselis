import React, { useMemo } from "react";
import { View, Text } from "react-native";
import stylesheet from "./assets/styles";
import type { BadgeProps } from "./types";
import { useCombinedStyle } from "../../hooks";
import { Slot } from "../index";
import PhaselisHOC from "../provider/lib/hoc";

const Badge: React.FC<BadgeProps> = (props) => {
  const {
    text,
    children,
    top,
    bottom,
    right,
    left,
    leftIcon,
    rightIcon,
    size = "md",
    variation = "primary",
  } = props;

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    "badge",
    variation,
    {
      ...props,
      size,
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
        <View style={[getCombinedStyle("element", true), absoluteMesurements]}>
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

Badge.displayName = "Badge";

export default PhaselisHOC(Badge);
