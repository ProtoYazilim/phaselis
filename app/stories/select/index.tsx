import React from "react";
import { Select, required } from "phaselis";

const SelectStory = () => {
  return (
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
  );
};

export default SelectStory;
