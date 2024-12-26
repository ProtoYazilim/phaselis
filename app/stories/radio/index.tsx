import React from "react";
import { View } from "react-native";
import { Radio, RadioGroup } from "phaselis";
import StoryView from "appSrc/StoryView";
import StorySection from "appSrc/StorySection";

const RadioStory = () => {
  return (
    <StoryView>
      <StorySection leftText="Variation" rightText="Solid MD">
        <RadioGroup name="rg-story-1">
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Radio text="Primary" variation="primary" value={"1"} checked />
            <Radio text="Secondary" variation="secondary" value={"2"} checked />
            <Radio text="Tertiary" variation="tertiary" value={"3"} checked />
          </View>
        </RadioGroup>
      </StorySection>
      <StorySection leftText="Disabled" rightText="Solid MD">
        <RadioGroup name="rg-story-2">
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Radio
              text="Primary"
              variation="primary"
              disabled
              value={"4"}
              checked
            />
            <Radio
              text="Secondary"
              variation="secondary"
              disabled
              value={"5"}
              checked
            />
            <Radio
              text="Tertiary"
              variation="tertiary"
              disabled
              value={"6"}
              checked
            />
          </View>
        </RadioGroup>
      </StorySection>
      <StorySection leftText="Sizes" rightText="Solid MD">
        <RadioGroup name="rg-story-3">
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              columnGap: 100,
              rowGap: 30,
              flexWrap: "wrap",
            }}
          >
            <Radio text="XS" size="xs" value={"7"} checked />
            <Radio text="SM" size="sm" value={"8"} checked />
            <Radio text="MD" size="md" value={"9"} checked />
            <Radio text="LG" size="lg" value={"10"} checked />
            <Radio text="XL" size="xl" value={"11"} checked />
            <Radio text="XXL" size="xxl" value={"12"} checked />
          </View>
        </RadioGroup>
      </StorySection>
    </StoryView>
  );
};

export default RadioStory;
