import { ReactNode } from "react";
import { ImagePropsBase, ViewStyle } from "react-native";

interface ImageProps extends ImagePropsBase, ImageExtraProps {
  style?: {
    container?: ViewStyle;
    element?: ViewStyle;
  };
  contextValue?: any;
  background?: boolean;
  children?: ReactNode;
}

export { ImageProps };
