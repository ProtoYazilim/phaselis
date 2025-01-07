import StorySection from "appSrc/StorySection";
import StoryView from "appSrc/StoryView";
import { Colors, Switch } from "phaselis";
import { Text, View } from "react-native";
import React from "react";

function SwitchStory() {
  const rightSlot = (
    <View style={{ flexDirection: "row" }}>
      <Text
        style={{
          color: Colors.Primary[300],
        }}
      >
        Primary{" "}
      </Text>
      <Text
        style={{
          color: Colors.Secondary[300],
        }}
      >
        Secondary{" "}
      </Text>
      <Text
        style={{
          color: Colors.Tertiary[300],
        }}
      >
        Tertiary
      </Text>
    </View>
  );

  return (
    <StoryView>
      <StorySection
        leftText="On"
        rightSlot={rightSlot}
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
        rightSlot={rightSlot}
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
          marginTop: 16,
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
        rightSlot={rightSlot}
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
        rightSlot={rightSlot}
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
