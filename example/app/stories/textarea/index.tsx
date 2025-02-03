import type { FormReference } from "phaselis";
import { useRef } from "react";
import { ScrollView } from "react-native";
import {
  Block,
  Button,
  Textfield,
  InputGroup,
  LucideIcon,
  Form,
  required,
} from "phaselis";

const TextAreaStory = () => {
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
            label="Contact Adress"
            message="please enter your current address"
          >
            <Textfield
              name="address"
              LeftSlot={({ themeStyle }) => (
                <LucideIcon name={"House"} style={{ ...themeStyle }} />
              )}
              placeholder="Enter your address information here!"
              textarea
              validations={[required("required")]}
            />
          </InputGroup>
          <Button text="Submit" onClick={handleLogin} />
          <Button text="Reset" type="reset" />
        </Form>
      </Block>
    </ScrollView>
  );
};

export default TextAreaStory;
