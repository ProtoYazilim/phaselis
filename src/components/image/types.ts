import type { ReactNode } from "react";
import type { ImagePropsBase, ViewStyle } from "react-native";

export interface ImageProps extends ImagePropsBase, ImageExtraProps {
  style?:
    | {
        container?: ViewStyle;
        element?: ViewStyle;
      }
    | ViewStyle;
  containerStyle?: ViewStyle;
  contextValue?: any;
  background?: boolean;
  children?: ReactNode;
}
