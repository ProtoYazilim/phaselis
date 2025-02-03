import { useState } from "react";
import { View, FlatList } from "react-native";
import type { AccordionListProps } from "./types";
import { useStyles } from "react-native-unistyles";
import { stylesheet_list as stylesheet } from "./assets/styles";
import AccordionItem from "./AccordionItem";
import PhaselisHOC from "../provider/lib/hoc";

const AccordionList = ({
  onChange,
  style,
  disabled,
  size = "md",
  contextValue,
  expandMode = "single",
  defaultExpandedIndex = [],
  data,
}: AccordionListProps) => {
  const { styles: defaultStyles } = useStyles(stylesheet, {
    disabled,
    size,
  });

  const { styles: themeStyles } = useStyles(
    contextValue?.theme?.accordionList as typeof stylesheet,
    {
      disabled,
      size,
    },
  );

  const { styles: propStyle } = useStyles(style as typeof stylesheet, {
    disabled,
    size,
  });

  const [expandedIndex, setExpandedIndex] =
    useState<number[]>(defaultExpandedIndex);

  const handleExpand = (value: any, index: number) => {
    onChange?.(index);
    if (expandMode === "single") {
      setExpandedIndex(value ? [index] : []);
      return;
    } else {
      if (value) {
        setExpandedIndex([...expandedIndex, index]);
      } else {
        setExpandedIndex(expandedIndex.filter((i) => i !== index));
      }
    }
  };

  return (
    <View
      style={[
        defaultStyles.container,
        themeStyles.container,
        propStyle.container,
      ]}
    >
      <FlatList
        style={[defaultStyles.element, themeStyles.element, propStyle.element]}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <AccordionItem
              onChange={(value) => {
                handleExpand(value, index);
              }}
              expand={expandedIndex.includes(index)}
              style={{
                container: {
                  borderTopWidth: index === 0 ? 1 : 0,
                  borderBottomWidth: 1,
                },
              }}
              headerText={item?.header}
            >
              {item?.child}
            </AccordionItem>
          );
        }}
      />
    </View>
  );
};

export default PhaselisHOC(AccordionList);
