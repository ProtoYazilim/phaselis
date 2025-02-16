import StoryView from "../../../src/StoryView";
import { Accordion, AccordionItem } from "phaselis";
import { Text } from "react-native";

const AccordionStory = () => {
  return (
    <StoryView style={{ gap: 0 }}>
      <Accordion expandMode="multiple">
        <AccordionItem headerText="1. Basics">
          <Text style={{ color: "#112940" }}>
            Lorem ipsum dolor sit amet, consectetur adipisci elit. 3Curabitur
            ullamcorper tempus eros, in alique nisl lobortis quis.
          </Text>
        </AccordionItem>
        <AccordionItem headerText="2. Start">
          <Text style={{ color: "#112940" }}>
            Lorem ipsum dolor sit amet, consectetur adipisci elit. 3Curabitur
            ullamcorper tempus eros, in alique nisl lobortis quis.
          </Text>
        </AccordionItem>
        <AccordionItem expand headerText="3. Documents">
          <Text style={{ color: "#112940" }}>
            Lorem ipsum dolor sit amet, consectetur adipisci elit. 3Curabitur
            ullamcorper tempus eros, in alique nisl lobortis quis.
          </Text>
        </AccordionItem>
        <AccordionItem headerText="4. Advanced">
          <Text style={{ color: "#112940" }}>
            Lorem ipsum dolor sit amet, consectetur adipisci elit. 3Curabitur
            ullamcorper tempus eros, in alique nisl lobortis quis.
          </Text>
        </AccordionItem>
        <AccordionItem expand disabled headerText="5. Expanded Disabled">
          <Text style={{ color: "#C3DFF4" }}>
            Lorem ipsum dolor sit amet, consectetur adipisci elit. 3Curabitur
            ullamcorper tempus eros, in alique nisl lobortis quis.
          </Text>
        </AccordionItem>
        <AccordionItem headerText="6. Examples">
          <Text style={{ color: "#112940" }}>
            Lorem ipsum dolor sit amet, consectetur adipisci elit. 3Curabitur
            ullamcorper tempus eros, in alique nisl lobortis quis.
          </Text>
        </AccordionItem>
        <AccordionItem disabled headerText="7. Collapsed Disabled">
          <Text style={{ color: "#112940" }}>
            Lorem ipsum dolor sit amet, consectetur adipisci elit. 3Curabitur
            ullamcorper tempus eros, in alique nisl lobortis quis.
          </Text>
        </AccordionItem>
      </Accordion>
    </StoryView>
  );
};

export default AccordionStory;
