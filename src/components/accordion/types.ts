import { TextStyle, ViewStyle } from "react-native";
import { ComponentSize, IconStyle, SlotIconName } from "@phaselis/types";
import { ReactElement, ReactNode } from "react";

interface AccordionHeaderProps {
  style?: {
    container?: ViewStyle;
    text?: TextStyle;
    icon?: IconStyle;
    drop?: IconStyle;
  };
  disabled?: boolean;
  size?: ComponentSize;
  contextValue?: any;
  onPress?: () => void;
  onClick?: () => void;
  expanded?: boolean;
  text: string;
  icon?: SlotIconName;
}

interface AccordionItemProps {
  style?: {
    container?: ViewStyle;
    element?: ViewStyle;
    header?: ViewStyle;
  };
  disabled?: boolean;
  size?: ComponentSize;
  contextValue?: any;
  expand?: boolean;
  onChange?: (expanded: boolean) => void;
  children?: ReactNode;
  index?: number;
  inContext?: boolean;
  headerText?: string;
  headerIcon?: SlotIconName;
}

interface AccordionListProps {
  onChange?: (index: number) => void;
  style?: {
    container?: ViewStyle;
    element?: ViewStyle;
  };
  disabled?: boolean;
  size?: ComponentSize;
  contextValue?: any;
  expandMode?: "single" | "multiple";
  defaultExpandedIndex?: number[];
  data?: { header: string; child: any }[];
}

interface AccordionProps {
  onChange?: (index: number) => void;
  expandMode?: "single" | "multiple";
  children?: ReactElement;
}

export {
  AccordionHeaderProps,
  AccordionProps,
  AccordionItemProps,
  AccordionListProps,
};
