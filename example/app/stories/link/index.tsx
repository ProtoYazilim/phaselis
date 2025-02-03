import StorySection from "../../../src/StorySection";
import StoryView from "../../../src/StoryView";
import { Link, Row } from "phaselis";

const LinkStory = () => {
  return (
    <StoryView style={{ gap: 64 }}>
      <StorySection
        leftText="Colors"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Link text="Default" />
        <Link text="Primary" variation="primary" />
        <Link text="Secondary" variation="secondary" />
        <Link text="Tertiary" variation="tertiary" />
      </StorySection>
      <StorySection
        leftText="Slots"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Link text="Icon Start" variation="primary" leftIcon="Link" />
        <Link
          text="Icons"
          variation="primary"
          leftIcon="Link"
          rightIcon="ExternalLink"
        />
        <Link text="Icon End" variation="primary" rightIcon="ExternalLink" />
      </StorySection>
      <StorySection leftText="Usages" style={{}}>
        <Row style={{ justifyContent: "space-between", paddingBottom: 64 }}>
          <Link text="Twitter" variation="primary" leftIcon="Twitter" />
          <Link text="Facebook" leftIcon="Facebook" />
          <Link text="Attached" variation="secondary" leftIcon="Link" />
        </Row>
        <Row style={{ justifyContent: "space-between" }}>
          <Link
            text="Open Link"
            variation="tertiary"
            rightIcon="ExternalLink"
          />
          <Link text="SMS" variation="primary" leftIcon="MessageCircle" />
          <Link text="" variation="tertiary" leftIcon="Link" />
        </Row>
      </StorySection>
    </StoryView>
  );
};

export default LinkStory;
