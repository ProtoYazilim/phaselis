import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Block, Form, Button } from "@phaselis/components";
import { FormReference } from "@phaselis/components/form";
import { Datepicker } from "@phaselis/components";

const DatepickerStory = () => {
  const refForm = useRef<FormReference>(null);

  return (
    <View style={styles.container}>
      <Form
        ref={refForm}
        onSubmit={(e, values) => {
          console.log(values);
        }}
      >
        <Block style={{ gap: 20, width: "100%" }}>
          <Datepicker
            name="datepicker"
            onChange={(e, date) =>
              console.log("Formatted date selected:", date)
            }
            disabled
          />
          <Button type="submit" text="submit" />
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

export default DatepickerStory;
