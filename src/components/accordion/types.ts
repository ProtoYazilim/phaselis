import type { TextStyle, ViewStyle } from "react-native";
import type { ReactElement, ReactNode } from "react";
import type { ComponentSize, IconStyle, SlotIconName } from "../../types";

interface AccordionHeaderProps extends AccordionExtraProps {
  style?:
    | {
        container?: ViewStyle;
        text?: TextStyle;
        icon?: IconStyle;
        drop?: IconStyle;
      }
    | TextStyle;
  containerStyle?: ViewStyle;
  iconStyle?: IconStyle;
  dropStyle?: IconStyle;
  disabled?: boolean;
  contextValue?: any;
  onPress?: () => void;
  onClick?: () => void;
  expanded?: boolean;
  text: string;
  icon?: SlotIconName;
}

interface AccordionItemProps extends AccordionExtraProps {
  style?:
    | {
        container?: ViewStyle;
        element?: ViewStyle;
        header?: ViewStyle;
      }
    | ViewStyle;
  containerStyle?: ViewStyle;
  headerStyle?: ViewStyle;
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
  children?: ReactElement | ReactElement[];
}

export type {
  AccordionHeaderProps,
  AccordionProps,
  AccordionItemProps,
  AccordionListProps,
};
