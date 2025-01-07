import StoryView from "appSrc/StoryView";
import { Button, Row } from "phaselis";
import React from "react";
import StorySection from "appSrc/StorySection";
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
        rightText="Primary Solid"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Button
          text="XS"
          {...screenProps}
          size="xs"
          onClick={() => {
            setScreenProps({ ...screenProps, size: "xs" });
          }}
        />
        <Button
          text="SM"
          {...screenProps}
          size="sm"
          onClick={() => {
            setScreenProps({ ...screenProps, size: "sm" });
          }}
        />
        <Button
          text="MD"
          {...screenProps}
          size="md"
          onClick={() => {
            setScreenProps({ ...screenProps, size: "md" });
          }}
        />
        <Button
          text="LG"
          {...screenProps}
          size="lg"
          onClick={() => {
            setScreenProps({ ...screenProps, size: "lg" });
          }}
        />
        <Button
          text="XL"
          {...screenProps}
          size="xl"
          onClick={() => {
            setScreenProps({ ...screenProps, size: "xl" });
          }}
        />
        <Button
          text="XXL"
          {...screenProps}
          size="xxl"
          onClick={() => {
            setScreenProps({ ...screenProps, size: "xxl" });
          }}
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
        <Button text="Start" {...screenProps} />
        <Button
          leftIcon="ChevronLeft"
          rightIcon="ChevronRight"
          text="Start End"
          {...screenProps}
        />
        <Button text="End" rightIcon="ChevronRight" {...screenProps} />
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
        <Button
          leftIcon="ChevronLeft"
          text="Primary"
          style={{ container: { flex: 1 } }}
        />
        <Button
          leftIcon="ChevronLeft"
          text="Outline"
          variation="primary_outline"
          style={{ container: { flex: 1 } }}
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
          <Button
            leftIcon="ChevronLeft"
            text="Primary"
            style={{ container: { flex: 1 } }}
          />
          <Button
            leftIcon="ChevronLeft"
            text="Disabled"
            variation="primary_outline"
            disabled
            style={{ container: { flex: 1 } }}
          />
        </Row>
        <Row style={{ gap: 16 }}>
          <Button
            leftIcon="ChevronLeft"
            text="Pressed"
            pressed
            style={{ container: { flex: 1 } }}
          />
          <Button
            leftIcon="ChevronLeft"
            variation="primary"
            loading
            style={{ container: { flex: 1 } }}
          />
        </Row>
      </StorySection>
    </StoryView>
  );
};

export default ButtonExample;
