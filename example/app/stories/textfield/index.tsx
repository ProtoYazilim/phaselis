import type { FormReference } from "phaselis";
import { useRef } from "react";
import { Form, Col, Row, Textfield, email, InputGroup } from "phaselis";
import StoryView from "../../../src/StoryView";
import StorySection from "../../../src/StorySection";

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
          <Col>
            <Textfield placeholder="XS" size="xs" />
          </Col>
          <Col>
            <Textfield placeholder="SM" size="sm" />
          </Col>
          <Col>
            <Textfield placeholder="MD" size="md" />
          </Col>
        </Row>
        <Row style={{ gap: 16, alignItems: "center", marginBottom: 16 }}>
          <Col>
            <Textfield placeholder="LG" size="lg" />
          </Col>
          <Col>
            <Textfield placeholder="XL" size="xl" />
          </Col>
        </Row>
        <Row style={{ gap: 16, alignItems: "center" }}>
          <Col>
            <Textfield placeholder="XXL" size="xxl" />
          </Col>
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
      <StorySection leftText="Masks" rightText="MD">
        <Form ref={refForm}>
          <Row style={{ gap: 10, alignItems: "center", marginBottom: 16 }}>
            <Col size={5}>
              <InputGroup>
                <Textfield
                  name="phone"
                  leftIcon="Smartphone"
                  maxLength={17}
                  mask={PHONE_MASK}
                  value={"+90 "}
                  keyboardType="phone-pad"
                />
              </InputGroup>
            </Col>
            <Col size={7}>
              <InputGroup>
                <Textfield
                  name="mail"
                  leftIcon="Mail"
                  validations={[email("required")]}
                  keyboardType="email-address"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row style={{ gap: 10, alignItems: "center" }}>
            <Col size={7}>
              <Textfield
                name="iban"
                leftIcon="Wallet"
                maxLength={32}
                mask={IBAN_MASK}
                keyboardType="decimal-pad"
              />
            </Col>
            <Col size={5}>
              <Textfield
                name="creditCard"
                leftIcon="CreditCard"
                maxLength={11}
                mask={CREDIT_MASK}
                keyboardType="number-pad"
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

const CREDIT_MASK = [/\d/, /\d/, " ", "/", " ", /\d/, /\d/];
