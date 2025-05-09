import { useState, type FC } from "react";
import { View, FlatList } from "react-native";
import type { AccordionListProps } from "./types";
import { stylesheet_list as stylesheet } from "./assets/styles";
import AccordionItem from "./AccordionItem";
import PhaselisHOC from "../provider/lib/hoc";
import { useCombinedStyle } from "../../hooks";

const AccordionList: FC<AccordionListProps> = (props) => {
  const {
    onChange,
    disabled,
    expandMode = "single",
    defaultExpandedIndex = [],
    data,
  } = props;

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet,
    "accordionList",
    "default",
    {
      ...props,
      disabled: disabled,
    },
  );

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
    <View style={getCombinedStyle("container")}>
      <FlatList
        style={getCombinedStyle("element", true)}
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
