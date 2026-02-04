import type { ReactNode } from "react";
import type {
  ImageBackgroundProps,
  ImagePropsBase,
  ImageStyle,
  ViewStyle,
} from "react-native";
import type { UnistylesValues } from "react-native-unistyles";

export interface ImageProps
  extends
    Omit<ImagePropsBase, "style">,
    Omit<ImageBackgroundProps, "style">,
    ImageExtraProps {
  style?: ImageStyleProps | ImageStyle;
  containerStyle?: ViewStyle;
  contextValue?: any;
  background?: boolean;
  children?: ReactNode;
}

export interface ImageStyleProps {
  container?: UnistylesValues;
  element?: UnistylesValues;
}
