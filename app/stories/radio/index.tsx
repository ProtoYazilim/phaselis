import React from "react";
import { View } from "react-native";
import { Radio, RadioGroup, InputGroup } from "@phaselis/components";
import { required } from "@phaselis/utils";

const RadioStory = () => {
  return (
    <View style={{ padding: 10, backgroundColor: "white", height: "100%" }}>
      <InputGroup label="Radio Group">
        <RadioGroup
          name="test"
          resetValue={""}
          validations={[required("En az bi deger seciniz")]}
        >
          <Radio text={"value 1"} value={"1"} disabled />
          <Radio text={"value 2"} value={"2"} />
          <Radio text={"value 3"} value={"3"} />
          <Radio text={"value 4"} value={"4"} />
        </RadioGroup>
      </InputGroup>
    </View>
  );
};

export default RadioStory;
