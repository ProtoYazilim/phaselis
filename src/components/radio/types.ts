import type { TextStyle, ViewStyle } from "react-native";
import type { FC, ReactNode } from "react";
import type { InputControlProps } from "../../types";

interface RadioGroupProps
  extends InputControlProps<string, any, any>,
    RadioGroupExtraProps {
  children?: ReactNode | FC | any | Element;
  disabled?: boolean;
  contextValue?: any;
  style?:
    | {
        group?: ViewStyle;
      }
    | ViewStyle;
  id?: string; //not used but maybe used
  className?: string; //not used but maybe used
}

interface RadioProps extends RadioExtraProps {
  text?: string;
  value: string;
  onChange?: (value: string) => void;
  contextValue?: any;
  style?:
    | {
        container?: ViewStyle;
        outerElement?: ViewStyle;
        innerElement?: ViewStyle;
        text?: TextStyle;
      }
    | TextStyle;
  containerStyle?: ViewStyle;
  outerElementStyle?: ViewStyle;
  innerElementStyle?: ViewStyle;
  partOfGroup?: boolean;
  checked?: boolean;
}

export type { RadioGroupProps, RadioProps };
