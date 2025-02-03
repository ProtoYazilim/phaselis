import type { FC } from "react";
import type { ButtonPropTypes } from "./types";
import type { GestureResponderEvent } from "react-native";
import { useState, useContext, Children } from "react";
import { Platform, Text, Pressable } from "react-native";
import stylesheet from "./assets/styles";
import PhaselisHOC from "../provider/lib/hoc";
import { Block, Slot, FormContext } from "../index";
import { useCombinedStyle } from "../../hooks";

const Button: FC<ButtonPropTypes> = ({
  type = "submit",
  style,
  id,
  text,
  children,
  LeftSlot,
  RightSlot,
  onClick,
  onPress,
  contextValue,
  size = "md",
  disabled = false,
  leftIcon,
  rightIcon,
  loading,
  onPressIn,
  onPressOut,
  variation = "primary",
  ...extraProps
}) => {
  let formContext = useContext(FormContext);
  const [isPressed, setPressed] = useState(false);

  const handleClick = (event: GestureResponderEvent) => {
    event.persist();
    onClick && onClick?.(event as any);
    onPress && onPress?.(event as any);
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
    variation,
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
          ? Children.map(children, (child, index) => {
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

export default PhaselisHOC(Button);
