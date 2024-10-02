import { icons } from "lucide-react-native";

interface AccordionHeaderProps {
  style?: any;
  disabled?: boolean;
  size?: any;
  contextValue?: any;
  onPress?: () => void;
  expanded?: boolean;
  text: string;
  icon: keyof typeof icons;
}

interface AccordionItemProps {
  style?: any;
  disabled?: boolean;
  size?: any;
  contextValue?: any;
  expand?: boolean;
  onChange?: (expanded: boolean) => void;
  children?: any;
  index?: number;
  inContext?: boolean;
  headerText?: string;
  headerIcon?: any;
}

interface AccordionListProps {
  onChange?: (index: number) => void;
  style?: any;
  disabled?: boolean;
  size?: any;
  contextValue?: any;
  expandMode?: "single" | "multiple";
  defaultExpandedIndex?: number[];
  data?: { header: string; child: any }[];
}

interface AccordionProps {
  onChange?: (index: number) => void;
  style?: any;
  disabled?: boolean;
  size?: any;
  contextValue?: any;
  expandMode?: "single" | "multiple";
  defaultExpandedIndex?: number[];
  data?: any[];
  children?: any;
}

export {
  AccordionHeaderProps,
  AccordionProps,
  AccordionItemProps,
  AccordionListProps,
};
