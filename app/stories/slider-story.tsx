import React, { useRef } from "react";
import { View } from "react-native";
import { FormReference } from "@phaselis/components/form";
import { Block, Button, Slider, Form } from "@phaselis/components";

const SliderStory = () => {
  const refForm = useRef<FormReference>(null);

  return (
    <View style={{ padding: 10, backgroundColor: "white" }}>
      <Form ref={refForm}>
        <Block style={{ gap: 20, width: "100%" }}>
          <Slider name="slider" />
          <Button
            text="Set Value to 50"
            onClick={() => {
              refForm.current?.setValues({ slider: "50" });
            }}
          />
          <Button text="Reset" type="reset" />
        </Block>
      </Form>
    </View>
  );
};

export default SliderStory;
