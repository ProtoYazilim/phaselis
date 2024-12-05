import React from "react";
import { Radio, RadioGroup, InputGroup } from "@phaselis/components";
import { required } from "@phaselis/utils";
import FormStoryView from "@appSrc/FormStoryView";

const FormUsage = () => {
  return (
    <FormStoryView
      values={{
        test: "2",
      }}
    >
      <InputGroup label="Preferred Language">
        <RadioGroup
          name="test"
          resetValue={""}
          validations={[required("En az bi deger seciniz")]}
        >
          <Radio text={"Turkish"} value={"1"} />
          <Radio text={"English"} value={"2"} />
          <Radio text={"Spanish"} value={"3"} />
          <Radio text={"Chinese"} value={"4"} />
        </RadioGroup>
      </InputGroup>
    </FormStoryView>
  );
};

export default FormUsage;
