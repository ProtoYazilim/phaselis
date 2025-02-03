import { useRef } from "react";
import { View, StyleSheet } from "react-native";
import type { FormReference } from "phaselis";
import { Checkbox, Block, Form } from "phaselis";

const CheckboxStory = () => {
  const refForm = useRef<FormReference>(null);

  return (
    <View style={styles.container}>
      <Form ref={refForm}>
        <Block style={{ gap: 20, width: "100%" }}>
          <Checkbox text="Checkbox XSmall" size="xs" name="1" />
          <Checkbox text="Checkbox Small" size="sm" name="2" />
          <Checkbox text="Checkbox Medium" size="md" name="3" />
          <Checkbox text="Checkbox Large" size="lg" name="4" />
          <Checkbox text="Checkbox XLarge" size="xl" name="5" />
          <Checkbox text="Checkbox XXLarge" size="xxl" name="6" />
          <Checkbox text="Checkbox MD Disabled" size="md" name="7" disabled />
          <Checkbox
            text="Checkbox MD Disabled Checked"
            size="md"
            name="8"
            disabled
            value={true}
          />
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
