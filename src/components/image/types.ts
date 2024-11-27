import { ReactNode } from "react";
import { ImagePropsBase, ViewStyle } from "react-native";

interface ImageProps extends ImagePropsBase {
  style?: {
    container?: ViewStyle;
    element?: ViewStyle;
  };
  contextValue?: any;
  disabled?: boolean;
  background?: boolean;
  children?: ReactNode;
}

export { ImageProps };
