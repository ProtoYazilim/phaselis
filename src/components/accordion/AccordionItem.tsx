import { useContext, useEffect, useState, type FC } from "react";
import { View } from "react-native";
import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";
import { stylesheet_item as stylesheet } from "./assets/styles";
import type { AccordionItemProps } from "./types";
import { AccordionContext } from "./Accordion";
import PhaselisHOC from "../provider/lib/hoc";
import { useCombinedStyle } from "../../hooks";

const AccordionItem: FC<AccordionItemProps> = (props) => {
  const {
    disabled,
    expand = false,
    onChange,
    children,
    index = 0,
    inContext = false,
    headerText,
    headerIcon,
    variation = "default",
  } = props;

  const [expanded, setExpanded] = useState(expand);

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    "accordion_item",
    variation,
    {
      ...props,
      disabled: disabled,
    },
  );

  const accordionContext = useContext(AccordionContext);

  useEffect(() => {
    setExpanded(expand);
  }, [expand]);

  useEffect(() => {
    if (inContext && expand && accordionContext?.expandMode === "single") {
      accordionContext?.addToExapandedIndex?.(index);
    }
  }, [accordionContext, expand, inContext, index]);

  useEffect(() => {
    if (
      !inContext ||
      !accordionContext ||
      accordionContext?.expandMode === "multiple"
    ) {
      return;
    }
    setExpanded(accordionContext?.expandedIndex?.includes(index) || false);
  }, [accordionContext, accordionContext?.expandedIndex, inContext, index]);

  return (
    <View style={getCombinedStyle("container")}>
      <AccordionHeader
        onPress={() => {
          if (!disabled) {
            setExpanded(!expanded);
            onChange?.(!expanded);
            accordionContext?.onChange(!expanded, index);
          }
        }}
        style={undefined}
        expanded={expanded}
        disabled={disabled}
        text={headerText || ""}
        icon={headerIcon}
      />
      <AccordionContent isExpanded={expanded}>
        <View style={getCombinedStyle("element", true)}>{children}</View>
      </AccordionContent>
    </View>
  );
};

export default PhaselisHOC(AccordionItem);
