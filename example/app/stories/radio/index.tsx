import { View } from "react-native";
import { Col, Radio, RadioGroup, Row } from "phaselis";
import StoryView from "../../../src/StoryView";
import StorySection from "../../../src/StorySection";
import ColoredRightSlot from "../../../src/ColoredRightSlot";

const RadioStory = () => {
  return (
    <StoryView>
      <StorySection
        leftText="Default"
        rightSlot={<ColoredRightSlot text="MD " />}
      >
        <RadioGroup name="rg-story-1">
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Radio text="Label" variation="primary" value={"1"} checked />
            <Radio text="Label" variation="secondary" value={"2"} checked />
            <Radio text="Label" variation="tertiary" value={"3"} checked />
          </View>
        </RadioGroup>
      </StorySection>
      <StorySection
        leftText="Disabled"
        rightSlot={<ColoredRightSlot text="MD " />}
      >
        <RadioGroup name="rg-story-2">
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Radio
              text="Label"
              variation="primary"
              disabled
              value={"4"}
              checked
            />
            <Radio
              text="Label"
              variation="secondary"
              disabled
              value={"5"}
              checked
            />
            <Radio
              text="Label"
              variation="tertiary"
              disabled
              value={"6"}
              checked
            />
          </View>
        </RadioGroup>
      </StorySection>
      <StorySection
        leftText="Pressed"
        rightSlot={<ColoredRightSlot text="MD " />}
      >
        <RadioGroup name="rg-story-1">
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Radio text="Label" variation="primary" value={"1"} checked />
            <Radio text="Label" variation="secondary" value={"2"} checked />
            <Radio text="Label" variation="tertiary" value={"3"} checked />
          </View>
        </RadioGroup>
      </StorySection>
      <StorySection leftText="Sizes" rightText="Primary">
        <RadioGroup name="rg-story-3">
          <View style={{ gap: 16 }}>
            <Row style={{ alignItems: "center" }}>
              <Col>
                <Radio text="XS" size="xs" value={"7"} checked />
              </Col>
              <Col>
                <Radio text="SM" size="sm" value={"8"} checked />
              </Col>
            </Row>
            <Row style={{ alignItems: "center" }}>
              <Col>
                <Radio text="MD" size="md" value={"9"} checked />
              </Col>

              <Col>
                <Radio text="LG" size="lg" value={"10"} checked />
              </Col>
            </Row>
            <Row style={{ alignItems: "center" }}>
              <Col>
                <Radio text="XL" size="xl" value={"11"} checked />
              </Col>
              <Col>
                <Radio text="XXL" size="xxl" value={"12"} checked />
              </Col>
            </Row>
          </View>
        </RadioGroup>
      </StorySection>
    </StoryView>
  );
};

export default RadioStory;
