import React, { FC, useContext, useMemo, useState } from "react";
import { Platform, Text, GestureResponderEvent, Pressable } from "react-native";

import { PhaselisHOC } from "@phaselis/components/provider";
import { FormContext } from "@phaselis/components/form";
import stylesheet from "./assets/styles";
import { ButtonPropTypes } from "./types";
import { Slot, Block } from "@phaselis/components";
import { useCombinedStyle } from "@phaselis/hooks";

type ButtonDefaultVariants =
  | "primary"
  | "secondary"
  | "tertiary"
  | "primary_outline"
  | "secondary_outline"
  | "tertiary_outline";

const Button: FC<ButtonPropTypes> = ({
  type = "submit",
  style,
  id,
  text,
  children,
  LeftSlot,
  RightSlot,
  onClick,
  contextValue,
  size = "md",
  outline = false,
  disabled = false,
  leftIcon,
  rightIcon,
  primary,
  secondary,
  tertiary,
  loading,
  onPressIn,
  onPressOut,
  ...extraProps
}) => {
  let formContext = useContext(FormContext);
  const [isPressed, setPressed] = useState(false);

  const variation = useMemo<ButtonDefaultVariants>(() => {
    let variant = "";

    const variantLiteral = {
      primary: "primary",
      secondary: "secondary",
      tertiary: "tertiary",
      default: "primary",
    };

    if (primary) {
      variant = variantLiteral.primary;
    } else if (secondary) {
      variant = variantLiteral.secondary;
    } else if (tertiary) {
      variant = variantLiteral.tertiary;
    } else {
      variant = variantLiteral.default;
    }

    if (outline) {
      variant = `${variant}_outline`;
    }

    return variant as ButtonDefaultVariants;
  }, [primary, secondary, tertiary, outline]);

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
    contextValue?.theme?.button[variation],
    {
      disabled: disabled,
      pressed: isPressed,
      size,
      loading,
      ...extraProps,
    },
  );

  const handleOnPressIn = (event: GestureResponderEvent) => {
    onPressIn?.(event);
    setPressed(true);
  };

  const handleOnPressOut = (event: GestureResponderEvent) => {
    onPressOut?.(event);
    setPressed(false);
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
        onPressIn={handleOnPressIn}
        onPressOut={handleOnPressOut}
        {...extraProps}
      >
        <Slot
          style={getCombinedStyle("leftSlot")}
          icon={leftIcon}
          size={sizeIconSizeLiteral[size] as any}
          loading={loading}
        >
          {LeftSlot && <LeftSlot />}
        </Slot>
        {children
          ? React.Children.map(children, (child, index) => {
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
          : text && <Text style={getCombinedStyle("text")}>{text}</Text>}
        <Slot
          style={getCombinedStyle("rightSlot")}
          icon={rightIcon}
          size={sizeIconSizeLiteral[size] as any}
        >
          {RightSlot && <RightSlot />}
        </Slot>
      </Pressable>
    </Block>
  );
};

Button.displayName = "button";

export default PhaselisHOC<ButtonPropTypes, ButtonExtraProps>(Button);
