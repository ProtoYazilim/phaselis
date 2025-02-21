import type { FormReference, PhaselisColors } from "phaselis";
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
  useColors,
} from "phaselis";

const TextAreaStory = () => {
  const refForm = useRef<FormReference>(null);
  const handleLogin = () => {
    refForm.current?.validateAll();
  };
  const Colors = useColors<PhaselisColors>();

  return (
    <ScrollView>
      <Block
        style={{
          gap: 10,
          width: "100%",
          padding: 10,
          backgroundColor: Colors.Shades.white,
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
