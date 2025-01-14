import React from "react";
import { Text } from "react-native";
import { AccordionList } from "phaselis";
import StoryView from "appSrc/StoryView";

const AccordionListStory = () => {
  return (
    <StoryView>
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
    </StoryView>
  );
};

export default AccordionListStory;
