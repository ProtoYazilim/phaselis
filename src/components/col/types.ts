import type { FC, ReactNode } from "react";
import type { ViewStyle } from "react-native";

type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 0;
interface ColProps {
  id?: string;
  children?: ReactNode | FC | any | Element;
  disabled?: boolean;
  contextValue?: any;
  size?: GridSize;
  offset?: GridSize;
  style?: ViewStyle;
}

export type { ColProps, GridSize };
