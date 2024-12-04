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
        <Block style={{ gap: Spacings.MD }}>
          <Button type="submit" text="submit" />
          <Button type="reset" text="Reset" />
        </Block>
      </Form>
    </View>
  );
};

export default RadioStory;
