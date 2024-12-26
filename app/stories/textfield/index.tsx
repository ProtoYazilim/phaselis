import React, { useRef, useState } from "react";
import { ScrollView } from "react-native";
import {
  Block,
  Button,
  Textfield,
  Form,
  InputGroup,
  LucideIcon,
  FormReference,
  required,
} from "phaselis";

const TextfieldStory = () => {
  const refForm = useRef<FormReference>(null);
  const [icon, setIcon] = useState<any>("Star");
  const handleLogin = () => {
    refForm.current?.validateAll();
    setIcon("Moon");
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
          <InputGroup label="test" message="test123123">
            <Textfield
              name="4"
              LeftSlot={({ themeStyle }) => (
                <LucideIcon name={"Star"} style={{ ...themeStyle }} />
              )}
              RightSlot={({ themeStyle }) => (
                <LucideIcon name={icon} style={{ ...themeStyle }} />
              )}
              size="md"
              validations={[required("required")]}
              placeholder="placeholder"
              disabled
            />
          </InputGroup>
          <InputGroup
            label="Disabled Input Group"
            message="extra info messsage"
          >
            <Textfield
              name="2"
              leftIcon={"Apple"}
              rightIcon={"Apple"}
              size="md"
              placeholder="placeholder"
              disabled
              value="i am disabled"
            />
          </InputGroup>
          <Textfield
            name="xs"
            leftIcon={"Apple"}
            rightIcon={"Apple"}
            size="xs"
            placeholder="XS Input"
            disabled
          />
          <Textfield
            name="sm"
            leftIcon={"Apple"}
            rightIcon={"Apple"}
            size="sm"
            placeholder="SM Input"
            disabled
          />
          <Textfield
            name="md"
            leftIcon={"Apple"}
            rightIcon={"Apple"}
            size="md"
            placeholder="MD Input"
            disabled
          />
          <Textfield
            name="lg"
            leftIcon={"Apple"}
            rightIcon={"Apple"}
            size="lg"
            placeholder="LG Input"
            disabled
          />
          <Textfield
            name="xl"
            leftIcon={"Apple"}
            rightIcon={"Apple"}
            size="xl"
            placeholder="XL Input"
            disabled
          />
          <Textfield
            name="xxl"
            leftIcon={"Apple"}
            rightIcon={"Apple"}
            size="xxl"
            placeholder="XXL Input"
            disabled
          />
          <Button text="Submit" onClick={handleLogin} />
          <Button text="Reset" type="reset" />
        </Form>
      </Block>
    </ScrollView>
  );
};

export default TextfieldStory;
