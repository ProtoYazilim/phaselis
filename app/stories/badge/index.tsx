import React from "react";
import { Badge, Button } from "@phaselis/components";
import StoryView from "@/appSrc/StoryView";
import StorySection from "@/appSrc/StorySection";

const BadgeStory = () => {
  return (
    <StoryView>
      <StorySection
        leftText="Usage"
        rightText="Various"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <Badge text="43" variation="primary" top={-6} right={-14}>
          <Button text="Primary" variation="primary" />
        </Badge>
        <Badge text="43" variation="secondary" top={-6} left={-14} size="sm">
          <Button text="Secondary" variation="secondary" size="sm" />
        </Badge>
        <Badge text="43" variation="tertiary" top={-6} left={-14} size="xs">
          <Button text="Tertiary" variation="tertiary" size="xs" />
        </Badge>
      </StorySection>
      <StorySection
        leftText="Colors"
        rightText="Solid MD"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <Badge text="Default" variation="default">
          <></>
        </Badge>
        <Badge text="Primary" variation="primary" left={100} bottom={0}>
          <></>
        </Badge>
        <Badge text="Secondary" variation="secondary" left={200} bottom={20}>
          <></>
        </Badge>
        <Badge text="Tertiary" variation="tertiary" left={300} bottom={40}>
          <></>
        </Badge>
      </StorySection>
    </StoryView>
  );
};

export default BadgeStory;
