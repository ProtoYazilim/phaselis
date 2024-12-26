import React, { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";
import {
  Block,
  Button,
  Select,
  InputGroup,
  Form,
  required,
  FormReference,
} from "phaselis";

async function testAPI() {
  return new Promise<{ value: string; label: string }[]>((resolve) => {
    setTimeout(() => {
      resolve([
        { value: "1", label: "Option 1" },
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
      ]);
    }, 5000);
  });
}

const SelectStory = () => {
  const refForm = useRef<FormReference>(null);
  const [starOptions, setStarOptions] = useState<
    { value: string; label: string }[]
  >([]);
  const handleLogin = () => {
    refForm.current?.validateAll();
  };

  useEffect(() => {
    testAPI().then((res) => {
      setStarOptions(res);
    });
    console.log("API called");
  }, []);

  return (
    <ScrollView style={{ padding: 10, backgroundColor: "white" }}>
      <Form ref={refForm}>
        <InputGroup label="Custom Select">
          <Select
            name="1"
            leftIcon="Star"
            size="md"
            validations={[required("required")]}
            closeOnSelect={false}
            options={[
              { value: "1", label: "Option 1" },
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
            ]}
            pickerType="custom"
            maxHeightModal={"50%"}
          />
        </InputGroup>

        <InputGroup label="Native Select">
          <Select
            name="2"
            leftIcon="Star"
            size="md"
            validations={[required("required")]}
            options={[]}
            pickerType="native"
          />
        </InputGroup>
        <InputGroup
          label="Custom Select with API"
          message="API called after 5 seconds"
        >
          <Select
            name="3"
            leftIcon="Star"
            size="md"
            validations={[required("required")]}
            closeOnSelect={false}
            options={starOptions}
            pickerType="custom"
            maxHeightModal={"50%"}
          />
        </InputGroup>
        <Block style={{ gap: 10, marginTop: 10 }}>
          <Button text="Submit" onClick={handleLogin} />
          <Button text="Reset" type="reset" />
        </Block>
      </Form>
    </ScrollView>
  );
};

export default SelectStory;
