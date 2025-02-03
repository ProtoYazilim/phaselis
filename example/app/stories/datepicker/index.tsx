import { useRef } from "react";
import { View, StyleSheet } from "react-native";
import type { FormReference } from "phaselis";
import { Block, Form, Button, Datepicker } from "phaselis";

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
            onChange={(e, date) => {
              console.log("Formatted date selected:", typeof date);
              console.log("Date object selected:", date);
            }}
          />
          <Button
            onClick={() => {
              refForm.current?.setValues({ datepicker: new Date() });
            }}
            type="button"
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
