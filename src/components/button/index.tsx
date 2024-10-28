import React, { FC, useContext } from "react";
import {
  ActivityIndicator,
  Platform,
  Text,
  View,
  GestureResponderEvent,
  Pressable,
} from "react-native";

import { PhaselisHOC } from "@phaselis/components/provider";
import { FormContext } from "@phaselis/components/form";
import stylesheet from "./assets/styles";
import { ButtonPropTypes } from "./types";
import { Slot, Block } from "@phaselis/components";
import { useCombinedStyle } from "@phaselis/hooks";

const Button: FC<ButtonPropTypes> = ({
  type = "submit",
  disabled,
  style,
  loading,
  id,
  text,
  children,
  LeftSlot,
  RightSlot,
  onClick,
  contextValue,
  size = "md",
  outline,
  leftIcon,
  rightIcon,
  primary,
  secondary,
  tertiary,
  variants,
  full,
  ...extraProps
}) => {
  let formContext = useContext(FormContext);

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
    return "primary";
  };

  const handleClick = (event: GestureResponderEvent) => {
    event.persist();
    onClick?.(event as any);
    if (formContext) {
      if (type === "submit") {
        formContext?.submit();
      } else if (type === "reset") {
        formContext?.reset();
      }
    }
  };

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.button,
    {
      disabled: disabled && getVariation(),
      loading,
      size,
      outline: outline && getVariation(),
      base: getVariation(),
      full: full,
      ...variants,
      ...extraProps,
    },
  );

  const renderLoader = () => {
    return (
      <View style={getCombinedStyle("loader")}>
        <ActivityIndicator size="small" color="white" />
      </View>
    );
  };

  const sizeIconSizeLiteral = {
    xs: "sm",
    sm: "md",
    md: "md",
    lg: "lg",
    xl: "lg",
    xxl: "lg",
  };

  return (
    <Block style={getCombinedStyle("container") as any}>
      <Pressable
        testID={Platform.OS === "ios" ? id : undefined}
        accessibilityLabel={Platform.OS === "android" ? id : undefined}
        onPress={handleClick}
        disabled={disabled}
        style={getCombinedStyle("element")}
        collapsable={true}
        {...extraProps}
      >
        <Slot
          style={getCombinedStyle("leftSlot")}
          icon={leftIcon}
          size={sizeIconSizeLiteral[size] as any}
        >
          {LeftSlot && <LeftSlot />}
        </Slot>
        {children ? (
          React.Children.map(children, (child, index) => {
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
        <Slot
          style={getCombinedStyle("rightSlot")}
          icon={rightIcon}
          size={sizeIconSizeLiteral[size] as any}
        >
          {RightSlot && <RightSlot />}
        </Slot>
        {loading && renderLoader()}
      </Pressable>
    </Block>
  );
};

Button.displayName = "button";

export default PhaselisHOC<ButtonPropTypes, ButtonExtraProps>(Button);
