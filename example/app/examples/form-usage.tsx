import type { FormReference } from "phaselis";
import { useRef } from "react";
import { Text, Alert, Dimensions } from "react-native";
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
} from "phaselis";
import StoryView from "../../src/StoryView";
import SectionDivider from "../../src/SectionDivider";
import Checkbox from "../../../src/components/checkbox";
import Switch from "../../../src/components/switch";

const MaskedTextfieldStory = () => {
  const refForm = useRef<FormReference>(null);
  const onSubmit = (_event: any, values: any) => {
    refForm.current?.validateAll();
    Alert.alert(JSON.stringify(values));
  };

  return (
    <Provider theme={lightTheme}>
      <StoryView style={{ gap: 0 }}>
        <Form ref={refForm} onSubmit={onSubmit}>
          <Row style={{ gap: 16 }}>
            <InputGroup label="Firstname" style={{ container: { flex: 1 } }}>
              <Textfield
                name="firstname"
                validations={[required("required")]}
              />
            </InputGroup>
            <InputGroup label="Lastname" style={{ container: { flex: 1 } }}>
              <Textfield name="lastname" validations={[required("required")]} />
            </InputGroup>
          </Row>
          <InputGroup label="e-Mail Address" style={{ container: { flex: 1 } }}>
            <Textfield
              name="email"
              validations={[required("required")]}
              leftIcon="Mail"
              mask={MAIL_MASK}
            />
          </InputGroup>
          <InputGroup label="Phone Number" style={{ container: { flex: 1 } }}>
            <Row style={{ gap: 8 }}>
              <Select
                options={[
                  { value: "1", label: "Türkiye +90" },
                  { value: "2", label: "Arjantin +54" },
                  { value: "3", label: "Azerbaycan +994" },
                  { value: "4", label: "Bahreyn +973" },
                ]}
                value="1"
              />
              <Textfield
                name="phone"
                validations={[required("required")]}
                leftIcon="Smartphone"
                mask={PHONE_MASK}
              />
            </Row>
          </InputGroup>
          <InputGroup label="Address" style={{ container: { flex: 1 } }}>
            <Textfield
              name="address"
              validations={[required("required")]}
              rightIcon="MapPin"
              style={{
                container: { height: Dimensions.get("screen").height * 0.12 },
              }}
              multiline
            />
          </InputGroup>
          <Row style={{ gap: 8, alignItems: "center" }}>
            <Block style={{ paddingLeft: 16, paddingRight: 16 }}>
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
          <Checkbox
            name="terms"
            text="I accept the terms of use"
            size="xs"
            value={true}
          />
          <Checkbox
            name="news"
            text="I want to be informed about news"
            size="xs"
            value={true}
          />
          <Row
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 24,
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
          <Row style={{ marginTop: 32 }}>
            <Button text="Register" full />
          </Row>

          <Row style={{ marginTop: 16 }}>
            <Button text="Reset" full type="reset" />
          </Row>
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
