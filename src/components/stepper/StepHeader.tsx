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
  leftText,
  rightText,
  topText,
  isFirst,
  isLast,
  isDisabled,
  style,
  contextValue,
  variation = "default",
  completeIcon = "Check",
  stepIcon,
  activeIcon,
}: StepHeaderProps) => {
  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.stepper?.default?.header,
    variation,
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
      {topText && <Text style={getCombinedStyle("topText")}>{topText}</Text>}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={getCombinedStyle("leftTrail")} />
        {leftText && (
          <Text style={getCombinedStyle("leftText")}>{leftText}</Text>
        )}
        <View style={getCombinedStyle("element")}>
          {isCompleted ? (
            <LucideIcon
              name={completeIcon}
              size="md"
              strokeWidth={3}
              style={getCombinedStyle("completeIcon")}
            />
          ) : stepIcon ? (
            <LucideIcon
              name={isActive ? activeIcon || stepIcon : stepIcon}
              size="md"
              strokeWidth={3}
              style={getCombinedStyle("completeIcon")}
            />
          ) : (
            <Text style={getCombinedStyle("number")}>{stepNum}</Text>
          )}
        </View>
        {rightText && (
          <Text style={getCombinedStyle("rightText")}>{rightText}</Text>
        )}
        <View style={getCombinedStyle("rightTrail")} />
      </View>
      {text &&
        (leftText || rightText ? (
          <Text style={getCombinedStyle("bottomText")}>{text}</Text>
        ) : (
          <Text style={getCombinedStyle("text")}>{text}</Text>
        ))}
    </View>
  );
};

export default PhaselisHOC(StepHeader);
