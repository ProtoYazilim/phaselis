import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";
import { stylesheet_item as stylesheet } from "./assets/styles";
import type { AccordionItemProps } from "./types";
import { AccordionContext } from "./Accordion";
import PhaselisHOC from "../provider/lib/hoc";
import { useCombinedStyle } from "../../hooks";

function AccordionItem({
  style,
  disabled,
  contextValue,
  expand = false,
  onChange,
  children,
  index = 0,
  inContext = false,
  headerText,
  headerIcon,
  variation = "default",
}: AccordionItemProps) {
  const [expanded, setExpanded] = useState(expand);

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    style,
    contextValue?.theme?.accordion_item,
    variation,
    {
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
        <View style={getCombinedStyle("element")}>{children}</View>
      </AccordionContent>
    </View>
  );
}

export default PhaselisHOC(AccordionItem);
