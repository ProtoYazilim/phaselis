import React from "react";
import { View } from "react-native";
import { Radio, RadioGroup, required } from "phaselis";

const RadioStory = () => {
  return (
    <View style={{ padding: 10, backgroundColor: "white", height: "100%" }}>
      <RadioGroup
        name="test-2"
        resetValue={""}
        validations={[required("En az bi deger seciniz")]}
      >
        <Radio text={"Checkbox XSmall"} value={"1"} size="xs" />
        <Radio text={"Checkbox Small"} value={"2"} size="sm" />
        <Radio text={"Checkbox Medium"} value={"3"} size="md" />
        <Radio text={"Checkbox Large"} value={"4"} size="lg" />
        <Radio text={"Checkbox XLarge"} value={"5"} size="xl" />
        <Radio text={"Checkbox XXLarge"} value={"6"} size="xxl" />
        <Radio text={"Checkbox Default"} value={"7"} />
      </RadioGroup>
    </View>
  );
};

export default RadioStory;
