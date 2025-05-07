import StoryView from "../../../src/StoryView";
import { Button, Row } from "phaselis";
import React from "react";
import StorySection from "../../../src/StorySection";
const ButtonExample = () => {
  const [screenProps, setScreenProps] = React.useState<any>({ primary: true });

  return (
    <StoryView>
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
        <Button
          text="Primary"
          variation="primary"
          onClick={() => {
            setScreenProps({ variation: "primary" });
          }}
        />
        <Button
          text="Secondary"
          variation="secondary"
          onClick={() => {
            setScreenProps({ variation: "secondary" });
          }}
        />
        <Button
          text="Tertiary"
          variation="tertiary"
          onClick={() => {
            setScreenProps({ variation: "tertiary" });
          }}
        />
      </StorySection>
      <StorySection
        leftText="Sizes"
        rightText="Primary Outline"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          text="XS"
          {...screenProps}
          size="xs"
          onClick={() => {
            setScreenProps({ ...screenProps, size: "xs" });
          }}
          variation="primary_outline"
        />
        <Button
          text="SM"
          {...screenProps}
          size="sm"
          onClick={() => {
            setScreenProps({ ...screenProps, size: "sm" });
          }}
          variation="primary_outline"
        />
        <Button
          text="MD"
          {...screenProps}
          size="md"
          onClick={() => {
            setScreenProps({ ...screenProps, size: "md" });
          }}
          variation="primary_outline"
        />
        <Button
          text="LG"
          {...screenProps}
          size="lg"
          onClick={() => {
            setScreenProps({ ...screenProps, size: "lg" });
          }}
          variation="primary_outline"
        />
        <Button
          text="XL"
          {...screenProps}
          size="xl"
          onClick={() => {
            setScreenProps({ ...screenProps, size: "xl" });
          }}
          variation="primary_outline"
        />
        <Button
          text="XXL"
          {...screenProps}
          size="xxl"
          onClick={() => {
            setScreenProps({ ...screenProps, size: "xxl" });
          }}
          variation="primary_outline"
        />
      </StorySection>

      <StorySection
        leftText="Slots & Labels"
        rightText="Primary Solid MD"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Button leftIcon="ChevronLeft" {...screenProps} />
        <Button
          leftIcon="ChevronLeft"
          rightIcon="ChevronRight"
          text="Start End"
          {...screenProps}
        />
        <Button leftIcon="ChevronRight" {...screenProps} />
      </StorySection>
      <StorySection
        leftText="Solid & Outline"
        rightText="Primary MD"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <Button leftIcon="ChevronLeft" text="Primary" full />
        <Button
          leftIcon="ChevronLeft"
          text="Outline"
          variation="primary_outline"
          full
        />
      </StorySection>
      <StorySection
        leftText="States"
        rightText="Primary Solid MD"
        style={{
          gap: 16,
        }}
      >
        <Row style={{ gap: 16 }}>
          <Button leftIcon="ChevronLeft" text="Default" full />
          <Button
            leftIcon="ChevronLeft"
            text="Disabled"
            variation="primary_outline"
            disabled
            full
          />
        </Row>
        <Row style={{ gap: 16 }}>
          <Button leftIcon="ChevronLeft" text="Pressed" pressed full />
          <Button leftIcon="ChevronLeft" variation="primary" loading full />
        </Row>
      </StorySection>
    </StoryView>
  );
};

export default ButtonExample;
