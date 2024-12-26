import { Accordion, AccordionItem } from "phaselis";
import React from "react";
import { View, Text } from "react-native";

const AccordionStory = () => {
  return (
    <View style={{ padding: 10, backgroundColor: "white" }}>
      <Accordion expandMode="multiple">
        <AccordionItem
          expand
          headerText="Accordion Header"
          headerIcon={"Banana"}
        >
          <Text>Accordion Item 1</Text>
        </AccordionItem>
        <AccordionItem disabled headerText="Accordion Header">
          <Text>Accordion Item 2</Text>
        </AccordionItem>
        <AccordionItem expand headerText="Accordion Header">
          <Text>Accordion Item 3</Text>
          <Text>Accordion Item 3</Text>
          <Text>Accordion Item 3</Text>
          <Text>Accordion Item 3</Text>
        </AccordionItem>
        <AccordionItem expand disabled headerText="Accordion Header">
          <Text>Accordion Item 4</Text>
        </AccordionItem>
      </Accordion>
    </View>
  );
};

export default AccordionStory;
