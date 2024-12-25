import React from "react";
import { Badge, Button, Col, Row } from "phaselis";
import StoryView from "appSrc/StoryView";
import StorySection from "appSrc/StorySection";

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
        }}
      >
        <Badge text="Default" variation="default">
          <></>
        </Badge>
        <Badge text="Primary" variation="primary">
          <></>
        </Badge>
        <Badge text="Secondary" variation="secondary">
          <></>
        </Badge>
        <Badge text="Tertiary" variation="tertiary">
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
            <Badge text="Label" variation="primary">
              <></>
            </Badge>
          </Col>
          <Col>
            <Badge text="Label" variation="primary" leftIcon="Bell">
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
      <StorySection leftText="Solid & Outline" rightText="MD">
        <Row>
          <Col>
            <Badge text="Default" variation="default">
              <></>
            </Badge>
          </Col>
          <Col>
            <Badge text="Default" variation="default_outline">
              <></>
            </Badge>
          </Col>
          <Col>
            <Badge text="Primary" variation="primary">
              <></>
            </Badge>
          </Col>
          <Col>
            <Badge text="Primary" variation="primary_outline">
              <></>
            </Badge>
          </Col>
        </Row>
        <Row>
          <Col>
            <Badge text="Secondary" variation="secondary" top={36}>
              <></>
            </Badge>
          </Col>
          <Col>
            <Badge text="Secondary" variation="secondary_outline" top={36}>
              <></>
            </Badge>
          </Col>
          <Col>
            <Badge text="Tertiary" variation="tertiary" top={36}>
              <></>
            </Badge>
          </Col>
          <Col>
            <Badge text="Tertiary" variation="tertiary_outline" top={36}>
              <></>
            </Badge>
          </Col>
        </Row>
      </StorySection>
    </StoryView>
  );
};

export default BadgeStory;
