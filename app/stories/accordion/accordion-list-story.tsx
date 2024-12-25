import React from "react";
import { View, Text } from "react-native";
import { AccordionList } from "phaselis";

const AccordionListStory = () => {
  return (
    <View style={{ padding: 10, backgroundColor: "white" }}>
      <AccordionList
        defaultExpandedIndex={[2]}
        data={[
          {
            header: "Accordion Header 1",
            child: <Text>Accordion Item 1 </Text>,
          },
          {
            header: "Accordion Header 2",
            child: <Text>Accordion Item 2 </Text>,
          },
          {
            header: "Accordion Header 3",
            child: <Text>Accordion Item 3 </Text>,
          },
          {
            header: "Accordion Header 4",
            child: <Text>Accordion Item 4 </Text>,
          },
        ]}
      />
    </View>
  );
};

export default AccordionListStory;
