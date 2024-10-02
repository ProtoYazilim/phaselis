import React, { useRef } from "react";
import { ScrollView, Text } from "react-native";
import { FormReference } from "@phaselis/components/form";
import { required } from "@phaselis/utils";
import {
  Block,
  Button,
  LucideIcon,
  Textfield,
  InputGroup,
  Form,
} from "@phaselis/components";

const MaskedTextfieldStory = () => {
  const refForm = useRef<FormReference>(null);
  const handleLogin = () => {
    refForm.current?.validateAll();
  };

  return (
    <ScrollView>
      <Block
        style={{
          gap: 10,
          width: "100%",
          padding: 10,
          backgroundColor: "white",
        }}
      >
        <Form ref={refForm}>
          <InputGroup
            label="Phone Number"
            message="Enter your turkish phone number"
          >
            <Textfield
              name="phone"
              LeftSlot={({ themeStyle }: { themeStyle: any }) => (
                <LucideIcon style={{ ...themeStyle }} name={"Phone"} />
              )}
              validations={[required("required")]}
              maxLength={17}
              mask={PHONE_MASK}
            />
          </InputGroup>
          <InputGroup label="Iban Number" message="Enter your turkish IBAN">
            <Textfield
              name="iban"
              LeftSlot={({ themeStyle }: { themeStyle: any }) => {
                return <Text style={[themeStyle, { fontSize: 16 }]}>TR</Text>;
              }}
              maxLength={30}
              mask={IBAN_MASK}
            />
          </InputGroup>
          <Button text="Submit" onClick={handleLogin} />
          <Button text="Reset" type="reset" />
        </Form>
      </Block>
    </ScrollView>
  );
};

export default MaskedTextfieldStory;

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
