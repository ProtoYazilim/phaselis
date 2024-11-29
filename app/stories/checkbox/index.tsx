import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Checkbox, Block, Form } from "@phaselis/components";
import { FormReference } from "@phaselis/components/form";

const CheckboxStory = () => {
  const refForm = useRef<FormReference>(null);

  return (
    <View style={styles.container}>
      <Form ref={refForm}>
        <Block style={{ gap: 20, width: "100%" }}>
          <Checkbox text="index Checkbox XSmall" size="xs" name="1" />
        </Block>
      </Form>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  input: {},
});

export default CheckboxStory;
