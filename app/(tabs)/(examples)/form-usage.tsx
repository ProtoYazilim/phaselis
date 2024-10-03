import React, { useRef } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { FormReference } from "@phaselis/components/form";
import { required } from "@phaselis/utils";
import {
  Block,
  Button,
  LucideIcon,
  Textfield,
  InputGroup,
  Form,
  Select,
} from "@phaselis/components";

const MaskedTextfieldStory = () => {
  const refForm = useRef<FormReference>(null);
  const onSubmit = (event: any, values: any) => {
    refForm.current?.validateAll();
    alert(JSON.stringify(values));
  };

  return (
    <ScrollView>
      <Block style={styles.container}>
        <Form ref={refForm} onSubmit={onSubmit}>
          <InputGroup label="User Name">
            <Textfield
              name="username"
              rightIcon="User"
              validations={[required("required")]}
            />
          </InputGroup>
          <InputGroup
            label="Phone Number"
            // message="Enter your turkish phone number"
          >
            <Textfield
              name="phone"
              LeftSlot={({ themeStyle }) => (
                <LucideIcon style={{ ...themeStyle }} name={"Phone"} />
              )}
              validations={[required("required")]}
              maxLength={17}
              mask={PHONE_MASK}
            />
          </InputGroup>
          <InputGroup
            label="Iban Number"
            //    message="Enter your turkish IBAN"
          >
            <Textfield
              name="iban"
              LeftSlot={({ themeStyle }) => {
                return <Text style={[themeStyle, { fontSize: 16 }]}>TR</Text>;
              }}
              maxLength={30}
              mask={IBAN_MASK}
            />
          </InputGroup>
          <InputGroup label="Occupation">
            <Select
              name="occupation"
              options={[
                { label: "Doctor", value: "doctor" },
                { label: "Engineer", value: "engineer" },
              ]}
            />
          </InputGroup>
          <Button text="Submit" />
          <Button text="Reset" type="reset" />
          <Button
            text="Initiate"
            type="button"
            onClick={() =>
              refForm.current?.setValues({
                username: "John Doe",
                phone: "+90 555 555 55 55",
                iban: "TR12 3456 7890 1234 5678 9012 3456",
                occupation: "doctor",
              })
            }
          />
        </Form>
      </Block>
    </ScrollView>
  );
};

export default MaskedTextfieldStory;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    width: "100%",
    padding: 10,
    backgroundColor: "white",
  },
});

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
