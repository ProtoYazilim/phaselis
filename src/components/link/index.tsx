import type { FC } from "react";
import type { LinkProps } from "./types";
import { Alert } from "react-native";
import { Linking, Pressable, Text } from "react-native";
import stylesheet from "./assets/styles";
import PhaselisHOC from "../provider/lib/hoc";
import { Slot } from "../index";
import { useCombinedStyle } from "../../hooks";

const Link: FC<LinkProps> = ({
  contextValue,
  style,
  disabled,
  text,
  href,
  leftIcon,
  LeftSlot,
  rightIcon,
  RightSlot,
  canOpenURL,
  variation = "default",
  onPress,
}) => {
  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.link,
    variation,
  );

  return (
    <Pressable
      style={getCombinedStyle("container")}
      onPress={(e) => {
        if (disabled) return;
        if (canOpenURL && href)
          Linking.canOpenURL(href)
            .then((supported) => {
              if (supported) {
                Linking.openURL(href);
              }
            })
            .catch((_err) => {
              Alert.alert(`This URL is not supported ${href}`);
            });
        else {
          href && Linking.openURL(href);
        }
        onPress && onPress(e);
      }}
    >
      <Slot style={getCombinedStyle("leftSlot")} icon={leftIcon} size="md">
        {LeftSlot && <LeftSlot />}
      </Slot>
      <Text style={getCombinedStyle("text")}>{text}</Text>
      <Slot style={getCombinedStyle("rightSlot")} icon={rightIcon} size="md">
        {RightSlot && <RightSlot />}
      </Slot>
    </Pressable>
  );
};

Link.displayName = "Link";

export default PhaselisHOC(Link);
