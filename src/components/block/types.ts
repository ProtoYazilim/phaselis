import {
  LinearGradientAttributes,
  ShadowAttributes,
} from "@phaselis/types/base";
import { ViewProps, ViewStyle } from "react-native";

interface ExtendedViewStyle extends ViewStyle {
  background?: string[] | string;
  shadows?: ShadowAttributes[];
  lineerGradient?: LinearGradientAttributes;
}

interface BlockProps extends ViewProps {
  children?: any;
  contextValue?: any;
  style?: ExtendedViewStyle;
}

export { BlockProps };
