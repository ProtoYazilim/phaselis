import type { FormReference } from "phaselis";
import { useRef } from "react";
import { Text, Alert, Dimensions, View } from "react-native";
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
          <InputGroup
            for="phone"
            label="Phone Number"
            style={{ container: { flex: 1 } }}
          >
            <Row style={{ gap: 8 }}>
              <Col size={5}>
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
              <Col size={7}>
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
          <View>
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
          </View>
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
