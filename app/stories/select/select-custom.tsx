import React, { useEffect, useState, useRef } from "react";
import { Select, required, Form, FormReference } from "phaselis";
import StoryView from "appSrc/StoryView";
import StorySection from "appSrc/StorySection";

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
  // const handleLogin = () => {
  //   refForm.current?.validateAll();
  // };

  useEffect(() => {
    testAPI().then((res) => {
      setStarOptions(res);
    });
    console.log("API called");
  }, []);

  const options = [
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
  ];

  return (
    <StoryView>
      <StorySection
        leftText="Select (Custom)"
        rightText="Custom Options"
        style={{ marginBottom: -30, paddingTop: 8 }}
      >
        <Form refForm={refForm}>
          <Select
            name="1"
            leftIcon="Star"
            size="md"
            validations={[required("required")]}
            closeOnSelect={false}
            options={options}
            pickerType="custom"
            maxHeightModal={"50%"}
          />
        </Form>
      </StorySection>
      <StorySection
        leftText="Select Native"
        rightText="Native Options"
        style={{ marginBottom: -30, paddingTop: 8 }}
      >
        <Form refForm={refForm}>
          <Select
            name="2"
            leftIcon="Star"
            size="md"
            validations={[required("required")]}
            options={options}
            pickerType="native"
          />
        </Form>
      </StorySection>
      <StorySection
        leftText="Select (Custom) API"
        rightText="Custom Options after 5secs"
        style={{ marginBottom: -30, paddingTop: 8 }}
      >
        <Form refForm={refForm}>
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
        </Form>
      </StorySection>
    </StoryView>
  );
};

export default SelectStory;
