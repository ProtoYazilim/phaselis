import StorySection from "../../../src/StorySection";
import StoryView from "../../../src/StoryView";
import { Switch } from "phaselis";
import { Text } from "react-native";
import ColoredRightSlot from "../../../src/ColoredRightSlot";

function SwitchStory() {
  return (
    <StoryView>
      <StorySection
        leftText="On"
        rightSlot={<ColoredRightSlot />}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 16,
        }}
      >
        <Switch name="1" value={true} variation="primary" />
        <Switch name="2" value={true} variation="secondary" />
        <Switch name="3" value={true} variation="tertiary" />
      </StorySection>
      <StorySection
        leftText="Off"
        rightSlot={<ColoredRightSlot />}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 16,
        }}
      >
        <Switch name="4" value={false} variation="primary" />
        <Switch name="5" value={false} variation="secondary" />
        <Switch name="6" value={false} variation="tertiary" />
      </StorySection>
      <StorySection
        leftText="Labels"
        rightText="Primary"
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 16,
        }}
      >
        <Switch
          name="7"
          value={true}
          variation="primary"
          LeftSlot={() => <Text>Left</Text>}
          RightSlot={() => <Text>Right</Text>}
        />
      </StorySection>
      <StorySection
        leftText="Icons"
        rightText="Primary "
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 16,
        }}
      >
        <Switch
          name="8"
          value={false}
          variation="primary"
          showIcons
          LeftSlot={() => <Text>Off</Text>}
          RightSlot={() => <Text>On</Text>}
        />
        <Switch
          name="9"
          value={true}
          variation="primary"
          showIcons
          LeftSlot={() => <Text>Off</Text>}
          RightSlot={() => <Text>On</Text>}
        />
      </StorySection>
      <StorySection
        leftText="Disabled On"
        rightSlot={<ColoredRightSlot />}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 16,
        }}
      >
        <Switch name="10" value={true} variation="primary" disabled />
        <Switch name="11" value={true} variation="secondary" disabled />
        <Switch name="12" value={true} variation="tertiary" disabled />
      </StorySection>
      <StorySection
        leftText="Disabled Off"
        rightSlot={<ColoredRightSlot />}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 16,
        }}
      >
        <Switch name="13" value={false} variation="primary" disabled />
        <Switch name="14" value={false} variation="secondary" disabled />
        <Switch name="15" value={false} variation="tertiary" disabled />
      </StorySection>
    </StoryView>
  );
}

export default SwitchStory;
