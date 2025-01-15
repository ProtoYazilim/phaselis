import { Block, Button } from "phaselis";
import React from "react";
import { StyleSheet, ScrollView } from "react-native";
const ButtonExample = () => {
  return (
    <ScrollView style={styles.container}>
      <Block style={{ gap: 10, marginBottom: 30 }}>
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          variation="primary_outline"
          disabled
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          variation="secondary_outline"
          disabled
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          variation="tertiary_outline"
          disabled
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          variation="primary"
          disabled
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          variation="secondary"
          disabled
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          variation="tertiary"
          disabled
        />
      </Block>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "white",
  },
});

export default ButtonExample;
