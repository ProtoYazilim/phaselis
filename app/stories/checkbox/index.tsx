import StoryView from "appSrc/StoryView";
import { Checkbox, Col, Row } from "phaselis";
import React from "react";
import StorySection from "appSrc/StorySection";
import ColoredRightSlot from "appSrc/ColoredRightSlot";

const CheckboxExample = () => {
  return (
    <StoryView>
      <StorySection
        leftText="Default"
        rightSlot={<ColoredRightSlot text="MD " />}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Checkbox text="Label" variation="primary" value={true} />
        <Checkbox text="Label" variation="secondary" value={true} />
        <Checkbox text="Label" variation="tertiary" value={true} />
      </StorySection>
      <StorySection
        leftText="Disabled"
        rightSlot={<ColoredRightSlot text="MD " />}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Checkbox text="Label" variation="primary" disabled value={true} />
        <Checkbox text="Label" variation="secondary" disabled value={true} />
        <Checkbox text="Label" variation="tertiary" disabled value={true} />
      </StorySection>
      <StorySection
        leftText="Pressed"
        rightSlot={<ColoredRightSlot text="MD " />}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Checkbox text="Label" value={true} variation="primary" pressed />
        <Checkbox text="Label" value={true} variation="secondary" pressed />
        <Checkbox text="Label" value={true} variation="tertiary" pressed />
      </StorySection>
      <StorySection leftText="Sizes" rightText="Primary" style={{ gap: 16 }}>
        <Row style={{ alignItems: "center" }}>
          <Col>
            <Checkbox text="XS" size="xs" value={true} />
          </Col>
          <Col>
            <Checkbox text="SM" size="sm" value={true} />
          </Col>
        </Row>
        <Row style={{ alignItems: "center" }}>
          <Col>
            <Checkbox text="MD" size="md" value={true} />
          </Col>
          <Col>
            <Checkbox text="LG" size="lg" value={true} />
          </Col>
        </Row>
        <Row style={{ alignItems: "center" }}>
          <Col>
            <Checkbox text="XL" size="xl" value={true} />
          </Col>
          <Col>
            <Checkbox text="XXL" size="xxl" value={true} />
          </Col>
        </Row>
      </StorySection>
    </StoryView>
  );
};

export default CheckboxExample;
