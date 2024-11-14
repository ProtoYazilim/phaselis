import React, { useRef } from "react";
import { ScrollView } from "react-native";
import { FormReference } from "@phaselis/components/form";
import { required } from "@phaselis/utils";
import {
  Block,
  Button,
  Select,
  InputGroup,
  Form,
  Textfield,
  LucideIcon,
} from "@phaselis/components";

const SelectStory = () => {
  const refForm = useRef<FormReference>(null);
  const handleLogin = () => {
    refForm.current?.validateAll();
  };

  return (
    <ScrollView style={{ padding: 10, backgroundColor: "white" }}>
      <Form ref={refForm}>
        <Block style={{ gap: 20, width: "100%" }}>
          <InputGroup label="Custom Select" message="test123123">
            <Select
              name="4"
              leftIcon="Star"
              size="md"
              validations={[required("required")]}
              closeOnSelect={false}
              options={[
                {
                  value: "1",
                  label: "Banka Kombetare Tregrate",
                  subLabel: "1 text",
                },
                { value: "2", label: "Option 2" },
                { value: "3", label: "Option 3" },
                { value: "4", label: "Option 4" },
                { value: "5", label: "Option 5" },
                { value: "6", label: "Option 6" },
                { value: "7", label: "Option 7" },
                { value: "8", label: "Option 8" },
                { value: "9", label: "Option 9" },
                { value: "10", label: "Option 10" },
                { value: "11", label: "Option 11" },
                { value: "12", label: "Option 12" },
                { value: "13", label: "Option 13" },
                { value: "14", label: "Option 14" },
                { value: "15", label: "Option 15" },
                { value: "16", label: "Option 16" },
                { value: "17", label: "Option 17" },
                { value: "18", label: "Option 18" },
                { value: "19", label: "Option 19" },
                { value: "20", label: "Option 20" },
              ]}
              pickerType="custom"
              maxHeightModal={"50%"}
            />
          </InputGroup>
        </Block>
        <InputGroup label="test" message="test123123">
          <Textfield
            name="3241"
            LeftSlot={({ themeStyle }) => (
              <LucideIcon name={"Star"} style={{ ...themeStyle }} />
            )}
            RightSlot={({ themeStyle }) => (
              <LucideIcon name={"Apple"} style={{ ...themeStyle }} />
            )}
            size="md"
            validations={[required("required")]}
            placeholder="placeholder"
            disabled={false}
          />
        </InputGroup>
        <Block style={{ gap: 20, width: "100%" }}>
          <InputGroup label="Native Select" message="test123123">
            <Select
              name="5"
              leftIcon="Star"
              size="md"
              validations={[required("required")]}
              options={[
                { value: "1", label: "Option 1", subLabel: "1 text" },
                { value: "2", label: "Option 2" },
                { value: "3", label: "Option 3" },
                { value: "4", label: "Option 4" },
                { value: "5", label: "Option 5" },
              ]}
              pickerType="native"
            />
          </InputGroup>
        </Block>
        <Block style={{ gap: 10, marginTop: 10 }}>
          <Button text="Submit" onClick={handleLogin} />
          <Button text="Reset" type="reset" />
        </Block>
      </Form>
    </ScrollView>
  );
};

export default SelectStory;
