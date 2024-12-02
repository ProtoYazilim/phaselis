import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import AccordionHeader from "./AccordionHeader";
import AccordionContent from "./AccordionContent";
import { useStyles } from "react-native-unistyles";
import { stylesheet_item as stylesheet } from "./assets/styles";
import { PhaselisHOC } from "@phaselis/components/provider";
import { AccordionItemProps } from "./types";
import { AccordionContext } from "./Accordion";

function AccordionItem({
  style,
  disabled,
  size,
  contextValue,
  expand = false,
  onChange,
  children,
  index = 0,
  inContext = false,
  headerText,
  headerIcon,
}: AccordionItemProps) {
  const [expanded, setExpanded] = useState(expand);

  const { styles: defaultStyles } = useStyles(stylesheet, {
    disabled,
    size,
  });

  const { styles: themeStyles } = useStyles(
    contextValue?.theme?.accordion_item as typeof stylesheet,
    {
      disabled,
      size,
    },
  );

  const { styles: propStyle } = useStyles(style as typeof stylesheet, {
    disabled,
    size,
  });

  const accordionContext = useContext(AccordionContext);

  useEffect(() => {
    setExpanded(expand);
  }, [expand]);

  useEffect(() => {
    if (inContext && expand && accordionContext?.expandMode === "single") {
      accordionContext?.addToExapandedIndex?.(index);
    }
  }, []);

  useEffect(() => {
    if (
      !inContext ||
      !accordionContext ||
      accordionContext?.expandMode === "multiple"
    ) {
      return;
    }
    setExpanded(accordionContext?.expandedIndex?.includes(index) || false);
  }, [accordionContext?.expandedIndex, index]);

  return (
    <View
      style={[
        defaultStyles.container,
        themeStyles.container,
        propStyle?.container,
      ]}
    >
      <AccordionHeader
        onPress={() => {
          if (!disabled) {
            setExpanded(!expanded);
            onChange?.(!expanded);
            accordionContext?.onChange(!expanded, index);
          }
        }}
        style={undefined}
        size={undefined}
        expanded={expanded}
        disabled={disabled}
        text={headerText || ""}
        icon={headerIcon}
      />
      <AccordionContent isExpanded={expanded}>
        <View
          style={[
            defaultStyles.element,
            themeStyles.element,
            propStyle?.element,
          ]}
        >
          {children}
        </View>
      </AccordionContent>
    </View>
  );
}

export default PhaselisHOC<AccordionItemProps>(AccordionItem);
