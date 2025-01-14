import React, { useRef } from "react";
import { Form, FormReference, Col, Row, Textfield, Datepicker } from "phaselis";
import StoryView from "appSrc/StoryView";
import StorySection from "appSrc/StorySection";

const TextfieldStory = () => {
  const refForm = useRef<FormReference>(null);

  return (
    <StoryView style={{ gap: 32 }}>
      <StorySection
        leftText="Default"
        rightText="MD"
        style={{ paddingVertical: 8 }}
      >
        <Textfield placeholder="Type here..." />
      </StorySection>
      <StorySection
        leftText="Placeholder"
        rightText="MD"
        style={{ paddingVertical: 8 }}
      >
        <Textfield placeholder="Placeholder" />
      </StorySection>
      <StorySection
        leftText="Slots"
        rightText="MD"
        style={{ paddingVertical: 8 }}
      >
        <Textfield
          placeholder="Type here..."
          leftIcon="Star"
          rightIcon="Moon"
        />
      </StorySection>
      <StorySection
        leftText="Sizes"
        rightText="Default"
        style={{ paddingVertical: 8 }}
      >
        <Row style={{ gap: 16, alignItems: "center", marginBottom: 16 }}>
          <Textfield placeholder="XS" size="xs" />
          <Textfield placeholder="SM" size="sm" />
          <Textfield placeholder="MD" size="md" />
        </Row>
        <Row style={{ gap: 16, alignItems: "center", marginBottom: 16 }}>
          <Textfield placeholder="LG" size="lg" />
          <Textfield placeholder="XL" size="xl" />
        </Row>
        <Row style={{ gap: 16, alignItems: "center" }}>
          <Textfield placeholder="XXL" size="xxl" />
        </Row>
      </StorySection>
      <StorySection
        leftText="Focus"
        rightText="MD"
        style={{ paddingVertical: 8 }}
      >
        <Textfield placeholder="Type here..." focus />
      </StorySection>
      <StorySection
        leftText="Disabled"
        rightText="MD"
        style={{ paddingVertical: 8 }}
      >
        <Textfield placeholder="Type here..." disabled />
      </StorySection>
      <StorySection
        leftText="Error"
        rightText="MD"
        style={{ paddingVertical: 8 }}
      >
        <Textfield placeholder="Type here..." error isChanged isUsed />
      </StorySection>
      <StorySection
        leftText="Masks"
        rightText="MD"
        style={{ paddingVertical: 8 }}
      >
        <Form ref={refForm}>
          <Row style={{ gap: 10, alignItems: "center", marginBottom: 16 }}>
            <Col>
              <Textfield
                name="phone"
                leftIcon="Smartphone"
                maxLength={17}
                mask={PHONE_MASK}
              />
            </Col>
            <Textfield name="mail" leftIcon="Mail" mask={MAIL_MASK} />
          </Row>
          <Row style={{ gap: 10, alignItems: "center" }}>
            <Textfield
              name="iban"
              leftIcon="Wallet"
              maxLength={32}
              mask={IBAN_MASK}
            />
            <Col>
              <Textfield
                name="creditCard"
                leftIcon="CreditCard"
                maxLength={11}
                mask={CREDIT_MASK}
              />
            </Col>
          </Row>
        </Form>
      </StorySection>
      <StorySection
        leftText="Textarea"
        rightText="MD"
        style={{ paddingVertical: 8 }}
      >
        <Textfield
          placeholder="Type here..."
          leftIcon="Star"
          rightIcon="Moon"
          textarea
        />
      </StorySection>
      <StorySection
        leftText="Datepicker"
        rightText="MD"
        style={{ paddingVertical: 8 }}
      >
        <Row style={{ gap: 16 }}>
          <Datepicker leftIcon="CalendarDays" rightIcon={undefined} />
          <Datepicker rightIcon="Calendar" />
        </Row>
      </StorySection>
    </StoryView>
  );
};

export default TextfieldStory;

const PHONE_MASK = [
  "+",
  "9",
  "0",
  " ",
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
];

const MAIL_MASK = [
  /\w/,
  /\w/,
  /\w/,
  /\w/,
  /\w/,
  /\w/,
  /\w/,
  " ",
  "@",
  " ",
  /\w/,
  /\w/,
  /\w/,
  /\w/,
  /\w/,
  /\w/,
  " ",
  ".",
  " ",
  /\w/,
  /\w/,
  /\w/,
];

const IBAN_MASK = [
  "T",
  "R",
  " ",
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  /\d/,
  /\d/,
];

const CREDIT_MASK = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  " ",
  "/",
  " ",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];
