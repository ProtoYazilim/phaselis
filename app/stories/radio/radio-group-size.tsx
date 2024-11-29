import React, { useRef } from "react";
import { View } from "react-native";
import { FormReference } from "@phaselis/components/form";
import {
  Button,
  Radio,
  RadioGroup,
  Form,
  InputGroup,
  Block,
} from "@phaselis/components";
import { required } from "@phaselis/utils";
import { useSpacings } from "@phaselis/components/provider/lib/hooks";
import { PhaselisSpacings } from "@phaselis/theme";

const RadioStory = () => {
  const refForm = useRef<FormReference>(null);
  const Spacings = useSpacings<PhaselisSpacings>();

  return (
    <View style={{ padding: 10, backgroundColor: "white", height: "100%" }}>
      <Form ref={refForm}>
        <InputGroup label="Radio Group with Size">
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
        </InputGroup>
        <Block style={{ gap: Spacings.MD }}>
          <Button type="submit" text="submit" />
          <Button type="reset" text="Reset" />
        </Block>
      </Form>
    </View>
  );
};

export default RadioStory;
