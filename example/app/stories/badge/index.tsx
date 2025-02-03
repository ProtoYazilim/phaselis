import { Badge, Button, Col, Colors, Label, Row } from "phaselis";
import StoryView from "../../../src/StoryView";
import StorySection from "../../../src/StorySection";

const BadgeStory = () => {
  return (
    <StoryView>
      <StorySection
        leftText="Usage"
        rightText="Various"
        style={{
          gap: 32,
        }}
      >
        <Row style={{ alignItems: "center", gap: 32 }}>
          <Col size={4}>
            <Badge text="43" variation="primary" top={-6} right={-14}>
              <Button
                text="Primary"
                variation="primary"
                style={{ container: { width: "100%" } }}
              />
            </Badge>
          </Col>
          <Col size={4}>
            <Badge
              text="43"
              variation="secondary"
              top={-6}
              right={-14}
              size="sm"
            >
              <Button
                text="Secondary"
                variation="secondary"
                size="sm"
                style={{ container: { width: "100%" } }}
              />
            </Badge>
          </Col>
          <Col size={4}>
            <Badge
              text="43"
              variation="tertiary"
              top={-6}
              right={-14}
              size="xs"
            >
              <Button
                text="Tertiary"
                variation="tertiary"
                size="xs"
                style={{ container: { width: "100%" } }}
              />
            </Badge>
          </Col>
        </Row>
        <Row style={{ alignItems: "center", gap: 32 }}>
          <Col size={4}>
            <Badge text="43" variation="primary_outline">
              <Label
                text="H1"
                variation="h1"
                style={{
                  text: { color: Colors.Primary[600] },
                }}
              />
            </Badge>
          </Col>
          <Col size={4} style={{ paddingLeft: 17 }}>
            <Badge text="43" variation="secondary_outline" size="sm">
              <Label
                text="H2"
                variation="h2"
                style={{ text: { color: Colors.Secondary[600] } }}
              />
            </Badge>
          </Col>
          <Col size={4} style={{ paddingLeft: 21 }}>
            <Badge text="43" variation="tertiary_outline" size="xs">
              <Label
                text="H3"
                variation="h3"
                style={{ text: { color: Colors.Tertiary[600] } }}
              />
            </Badge>
          </Col>
        </Row>
      </StorySection>

      <StorySection
        leftText="Colors"
        rightText="Solid MD"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Badge
          text="Default"
          variation="default"
          style={{ element: { width: 76 } }}
        >
          <></>
        </Badge>
        <Badge
          text="Primary"
          variation="primary"
          style={{ element: { width: 76 } }}
          left={-29}
        >
          <></>
        </Badge>
        <Badge text="Secondary" variation="secondary" left={-58}>
          <></>
        </Badge>
        <Badge
          text="Tertiary"
          variation="tertiary"
          style={{ element: { width: 76 } }}
          left={-75}
        >
          <></>
        </Badge>
      </StorySection>

      <StorySection
        leftText="Sizes"
        rightText="Primary Solid"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginRight: 45,
        }}
      >
        <Badge text="XS" variation="primary" size="xs" top={9}>
          <></>
        </Badge>
        <Badge text="SM" variation="primary" size="sm" top={8}>
          <></>
        </Badge>
        <Badge text="MD" variation="primary" top={6}>
          <></>
        </Badge>
        <Badge text="LG" variation="primary" size="lg" top={4}>
          <></>
        </Badge>
        <Badge text="XL" variation="primary" size="xl" top={2}>
          <></>
        </Badge>
        <Badge text="XXL" variation="primary" size="xxl">
          <></>
        </Badge>
      </StorySection>

      <StorySection leftText="Slots & Labels" rightText="Primary Solid MD">
        <Row>
          <Col>
            <Badge variation="primary" rightIcon="Bell">
              <></>
            </Badge>
          </Col>
          <Col>
            <Badge text="Label" variation="primary" left={-21}>
              <></>
            </Badge>
          </Col>
          <Col>
            <Badge text="Label" variation="primary" leftIcon="Bell" left={-14}>
              <></>
            </Badge>
          </Col>
          <Col>
            <Badge
              text="Label"
              variation="primary"
              leftIcon="Bell"
              rightIcon="BellRing"
            >
              <></>
            </Badge>
          </Col>
        </Row>
      </StorySection>
      <StorySection
        leftText="Solid & Outline"
        rightText="MD"
        style={{ marginBottom: "20%", gap: 36 }}
      >
        <Row style={{ gap: "13%" }}>
          <Col size={3}>
            <Badge text="Label" variation="default">
              <></>
            </Badge>
          </Col>
          <Col size={3}>
            <Badge text="Label" variation="default_outline">
              <></>
            </Badge>
          </Col>
          <Col size={3}>
            <Badge text="Label" variation="primary">
              <></>
            </Badge>
          </Col>
          <Col size={3}>
            <Badge text="Label" variation="primary_outline">
              <></>
            </Badge>
          </Col>
        </Row>
        <Row style={{ gap: "13%" }}>
          <Col size={3}>
            <Badge text="Label" variation="secondary">
              <></>
            </Badge>
          </Col>
          <Col size={3}>
            <Badge text="Label" variation="secondary_outline">
              <></>
            </Badge>
          </Col>
          <Col size={3}>
            <Badge text="Label" variation="tertiary">
              <></>
            </Badge>
          </Col>
          <Col size={3}>
            <Badge text="Label" variation="tertiary_outline">
              <></>
            </Badge>
          </Col>
        </Row>
      </StorySection>
    </StoryView>
  );
};

export default BadgeStory;
