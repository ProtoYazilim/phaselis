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
          size="xs"
          primary
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="sm"
          primary
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="md"
          primary
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="lg"
          primary
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="xl"
          primary
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="xxl"
          primary
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
