import type { FormReference } from "phaselis";
import { useRef } from "react";
import { Text, Alert } from "react-native";
import {
  Block,
  Button,
  LucideIcon,
  Textfield,
  InputGroup,
  Form,
  Row,
  Select,
  required,
  Datepicker,
  Provider,
  lightTheme,
  requiredToOther,
} from "phaselis";
import StoryView from "../../src/StoryView";
import SectionDivider from "../../src/SectionDivider";
import Checkbox from "../../../src/components/checkbox";
import Switch from "../../../src/components/switch";
import Col from "../../../src/components/col";
import Link from "../../../src/components/link";

const MaskedTextfieldStory = () => {
  const refForm = useRef<FormReference>(null);
  const onSubmit = (_event: any, values: any) => {
    refForm.current?.validateAll();
    Alert.alert(JSON.stringify(values));
  };

  return (
    <Provider theme={lightTheme}>
      <StoryView style={{ gap: 32 }}>
        <Form ref={refForm} onSubmit={onSubmit}>
          <Row style={{ gap: 16 }}>
            <InputGroup label="Firstname" style={{ container: { flex: 1 } }}>
              <Textfield
                name="firstname"
                validations={[required("required")]}
                placeholder="İsim"
              />
            </InputGroup>
            <InputGroup label="Lastname" style={{ container: { flex: 1 } }}>
              <Textfield
                name="lastname"
                validations={[required("required")]}
                placeholder="Soyisim"
              />
            </InputGroup>
          </Row>
          <InputGroup label="E-Mail Address" style={{ container: { flex: 1 } }}>
            <Textfield
              name="email"
              validations={[required("required")]}
              leftIcon="Mail"
              mask={MAIL_MASK}
            />
          </InputGroup>
          <InputGroup
            for="phone"
            label="Phone Number"
            style={{ container: { flex: 1 } }}
          >
            <Row style={{ gap: 8 }}>
              <Col size={6}>
                <Select
                  options={[
                    { value: "1", label: "Türkiye +90" },
                    { value: "2", label: "Arjantin +54" },
                    { value: "3", label: "Azerbaycan +994" },
                    { value: "4", label: "Bahreyn +973" },
                  ]}
                  value="1"
                  name="phone-code"
                  validations={[requiredToOther("phone", "required")]}
                />
              </Col>
              <Col size={6}>
                <Textfield
                  name="phone"
                  validations={[required("required")]}
                  leftIcon="Smartphone"
                  mask={PHONE_MASK}
                />
              </Col>
            </Row>
          </InputGroup>
          <InputGroup label="Address" style={{ container: { flex: 1 } }}>
            <Textfield
              name="address"
              validations={[required("required")]}
              rightIcon="MapPin"
              style={{
                container: {
                  height: 96,
                },
              }}
              textarea
              placeholder="Type Here..."
            />
          </InputGroup>
          <Row
            style={{
              gap: 8,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Block style={{ paddingLeft: 8, paddingRight: 8 }}>
              <Text>Date of Birth</Text>
            </Block>
            <Datepicker
              name="birthdate"
              format="dd / MM / yyyy"
              rightIcon="Calendar"
            />
          </Row>
          <SectionDivider leftText="" rightText="" />
          <Row style={{ gap: 16 }}>
            <InputGroup label="Password" style={{ container: { flex: 1 } }}>
              <Textfield
                name="password"
                validations={[required("required")]}
                leftIcon="KeyRound"
              />
            </InputGroup>
            <InputGroup label="Repeat" style={{ container: { flex: 1 } }}>
              <Textfield
                name="password-repeat"
                validations={[required("required")]}
                leftIcon="KeyRound"
              />
            </InputGroup>
          </Row>
          <SectionDivider leftText="" rightText="" />
          <Block>
            <Block style={{ flexDirection: "row" }}>
              <Checkbox
                name="terms"
                text="I accept the terms of use"
                size="xs"
                value={true}
              />
              <Link
                leftIcon="ExternalLink"
                href="https://www.protoyazilim.com"
              />
            </Block>
            <Checkbox
              name="news"
              text="I want to be informed about news"
              size="xs"
              value={true}
            />
          </Block>
          <Row
            style={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Block
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <Text>Membership</Text>
              <LucideIcon name="Info" />
            </Block>
            <Switch
              name="membership"
              showIcons
              LeftSlot={() => <Text>Normal</Text>}
              RightSlot={() => <Text>Prime</Text>}
              offIcon="UsersRound"
              onIcon="Crown"
            />
          </Row>
          <Button text="Register" full />
          <Button text="Reset" full type="reset" />
        </Form>
      </StoryView>
    </Provider>
  );
};

export default MaskedTextfieldStory;

const PHONE_MASK = [
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
  /\w/,
  /\w/,
  /\w/,
  /\w/,
  /\w/,
  /\w/,
  "@",
  /\w/,
  /\w/,
  /\w/,
  /\w/,
  /\w/,
  /\w/,
  /\w/,
  /\w/,
  /\w/,
  /\w/,
  /\w/,
  /\w/,
  /\w/,
  /\w/,
  /\w/,
  ".",
  /\w/,
  /\w/,
  /\w/,
];
