import { TabItem, TabView, useColors, type PhaselisColors } from "phaselis";
import { Text } from "react-native";
import StoryView from "../../../src/StoryView";
import StorySection from "../../../src/StorySection";

function TabViewStory() {
  const Colors = useColors<PhaselisColors>();

  return (
    <StoryView>
      <StorySection leftText="Default">
        <TabView>
          <TabItem title="Item 1">
            <Text style={{ color: Colors.Primary[950] }}>Tab Content 1</Text>
          </TabItem>
          <TabItem title="Item 2">
            <Text style={{ color: Colors.Primary[950] }}>Tab Content 2</Text>
          </TabItem>
          <TabItem title="Item 3">
            <Text style={{ color: Colors.Primary[950] }}>Tab Content 3</Text>
          </TabItem>
        </TabView>
      </StorySection>
      <StorySection leftText="Scroll">
        <TabView scrollable activeTab={2}>
          <TabItem title="Item 1">
            <Text style={{ color: Colors.Primary[950] }}>Tab Content 1</Text>
          </TabItem>
          <TabItem title="Item 2">
            <Text style={{ color: Colors.Primary[950] }}>Tab Content 2</Text>
          </TabItem>
          <TabItem title="Item 3">
            <Text style={{ color: Colors.Primary[950] }}>Tab Content 3</Text>
          </TabItem>
          <TabItem title="Item 4">
            <Text style={{ color: Colors.Primary[950] }}>Tab Content 4</Text>
          </TabItem>
          <TabItem title="Item 5">
            <Text style={{ color: Colors.Primary[950] }}>Tab Content 5</Text>
          </TabItem>
        </TabView>
      </StorySection>
      <StorySection leftText="Icon">
        <TabView>
          <TabItem title="Item 1" leftIcon="Star">
            <Text style={{ color: Colors.Primary[950] }}>Tab Content 1</Text>
          </TabItem>
          <TabItem title="Item 2" rightIcon="Moon">
            <Text style={{ color: Colors.Primary[950] }}>Tab Content 2</Text>
          </TabItem>
        </TabView>
      </StorySection>
    </StoryView>
  );
}

export default TabViewStory;
