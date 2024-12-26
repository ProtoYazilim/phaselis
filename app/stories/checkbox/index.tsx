import StoryView from "appSrc/StoryView";
import { Checkbox } from "phaselis";
import React from "react";
import StorySection from "appSrc/StorySection";

const CheckboxExample = () => {
  return (
    <StoryView>
      <StorySection
        leftText="Variation"
        rightText="Solid MD"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Checkbox text="Primary" variation="primary" value={true} />
        <Checkbox text="Secondary" variation="secondary" value={true} />
        <Checkbox text="Tertiary" variation="tertiary" value={true} />
      </StorySection>
      <StorySection
        leftText="Disabled"
        rightText="Solid MD"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Checkbox text="Primary" variation="primary" disabled value={true} />
        <Checkbox
          text="Secondary"
          variation="secondary"
          disabled
          value={true}
        />
        <Checkbox text="Tertiary" variation="tertiary" disabled value={true} />
      </StorySection>
      <StorySection
        leftText="Sizes"
        rightText="Solid MD"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          columnGap: 100,
          rowGap: 30,
          flexWrap: "wrap",
        }}
      >
        <Checkbox text="XS" size="xs" value={true} />
        <Checkbox text="SM" size="sm" value={true} />
        <Checkbox text="MD" size="md" value={true} />
        <Checkbox text="LG" size="lg" value={true} />
        <Checkbox text="XL" size="xl" value={true} />
        <Checkbox text="XXL" size="xxl" value={true} />
      </StorySection>
    </StoryView>
  );
};

export default CheckboxExample;
