import type { ReactNode } from "react";
import type {
  ImageBackgroundProps,
  ImagePropsBase,
  StyleProp,
  ViewStyle,
} from "react-native";

export interface ImageProps
  extends ImagePropsBase,
    ImageBackgroundProps,
    ImageExtraProps {
  style?: StyleProp<ViewStyle>;
  containerStyle?: ViewStyle;
  contextValue?: any;
  background?: boolean;
  children?: ReactNode;
}
