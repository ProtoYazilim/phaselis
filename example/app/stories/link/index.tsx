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
          <Link
            text="Twitter"
            variation="primary"
            leftIcon="Twitter"
            href="https://x.com/"
          />
          <Link
            text="Facebook"
            leftIcon="Facebook"
            href="https://www.facebook.com/"
          />
          <Link
            text="Attached"
            variation="secondary"
            leftIcon="Link"
            href="https://www.protoyazilim.com/phaselis/"
          />
        </Row>
        <Row style={{ justifyContent: "space-between", paddingBottom: 64 }}>
          <Link
            text="Open Link"
            variation="tertiary"
            rightIcon="ExternalLink"
            href="https://www.protoyazilim.com/phaselis/"
          />
          <Link
            text="SMS"
            variation="primary"
            leftIcon="MessageCircle"
            href="sms:+123456789"
          />
          <Link text="" variation="tertiary" leftIcon="Link" />
        </Row>
        <Row style={{ justifyContent: "space-between" }}>
          <Link
            text="Proto Software"
            variation="secondary"
            rightIcon="ExternalLink"
            href="https://www.protoyazilim.com/"
          />
          <Link
            text="Mail"
            variation="tertiary"
            leftIcon="Mail"
            href="mailto: info@protoyazilim.com"
          />
          <Link
            text="Tel"
            variation="primary"
            leftIcon="Phone"
            href="tel:+123456789"
          />
        </Row>
      </StorySection>
    </StoryView>
  );
};

export default LinkStory;
