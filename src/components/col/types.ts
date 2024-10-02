import { ViewStyle } from "react-native";
import { IBasePropType } from "@phaselis/types";

interface ColProps extends IBasePropType {
  size?: GridSize;
  offset?: GridSize;
  xs?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
  xsOffset?: GridSize;
  mdOffset?: GridSize;
  lgOffset?: GridSize;
  xlOffset?: GridSize;
  className?: string;
  style?: ViewStyle;
}

type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 0;

export { ColProps, GridSize };
