import React from "react";
import { View, Text } from "react-native";
import { StepHeaderProps } from "./types";
import { step_header_styles as stylesheet } from "./assets/styles";
import LucideIcon from "src/components/lucide-icon";
import { PhaselisHOC } from "src/components/provider";
import { useCombinedStyle } from "src/hooks";

const StepHeader: React.FC<StepHeaderProps> = ({
  stepNum,
  isActive,
  isCompleted,
  text,
  isFirst,
  isLast,
  isDisabled,
  style,
  contextValue,
}: StepHeaderProps) => {
  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.stepper?.header,
    {
      isActive,
      isCompleted,
      isFirst,
      isLast,
      isDisabled,
    },
  );

  return (
    <View style={getCombinedStyle("container")}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={getCombinedStyle("leftTrail")} />
        <View style={getCombinedStyle("element")}>
          {isCompleted ? (
            <LucideIcon
              name="Check"
              size="md"
              strokeWidth={3}
              style={getCombinedStyle("completeIcon")}
            />
          ) : (
            <Text style={getCombinedStyle("number")}>{stepNum}</Text>
          )}
        </View>
        <View style={getCombinedStyle("rightTrail")} />
      </View>
      {text && <Text style={getCombinedStyle("text")}>{text}</Text>}
    </View>
  );
};

export default PhaselisHOC(StepHeader);
