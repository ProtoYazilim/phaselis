import React, { useRef } from "react";
import { ScrollView } from "react-native";
import { FormReference } from "@phaselis/components/form";
import { required } from "@phaselis/utils";
import {
  Block,
  Button,
  Select,
  InputGroup,
  LucideIcon,
  Form,
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
          <InputGroup label="test" message="test123123">
            <Select
              name="4"
              leftIcon="Star"
              size="md"
              validations={[required("required")]}
              options={[
                { value: "1", label: "Option 1" },
                { value: "2", label: "Option 2" },
                { value: "3", label: "Option 3" },
                { value: "4", label: "Option 4" },
                { value: "5", label: "Option 5" },
              ]}
            />
          </InputGroup>
          <InputGroup
            label="Disabled Input Group"
            message="extra info messsage"
          >
            <Select
              name="2"
              LeftSlot={({ themeStyle }: { themeStyle: any }) => (
                <LucideIcon name={"Star"} style={{ ...themeStyle }} />
              )}
              size="md"
              disabled
              placeholder="Disabled Select"
              options={[
                { value: "1", label: "1" },
                { value: "2", label: "2" },
                { value: "3", label: "3" },
                { value: "4", label: "4" },
                { value: "5", label: "5" },
              ]}
            />
          </InputGroup>
        </Block>
        <Block style={{ justifyContent: "center", alignItems: "center" }}>
          <InputGroup label="123">
            <Select
              style={{ container: { width: "50%" } }}
              options={[]}
              name="center test"
            />
          </InputGroup>
        </Block>
        <Block style={{ gap: 10, marginTop: 10 }}>
          <Button text="Submit" onClick={handleLogin} />
          <Button text="Reset" type="reset" />
        </Block>
      </Form>
      <Block style={{ gap: 10 }}>
        {/* <Select options={[]} size="xs" disabled />
        <Select options={[]} size="sm" disabled />
        <Select options={[]} size="md" disabled />
        <Select options={[]} size="lg" disabled />
        <Select options={[]} size="xl" disabled />
        <Select options={[]} size="xxl" disabled /> */}
      </Block>
    </ScrollView>
  );
};

export default SelectStory;
