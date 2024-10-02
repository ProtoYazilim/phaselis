import { Block, Button } from "@phaselis/components";
import React from "react";
import { StyleSheet, ScrollView } from "react-native";
const ButtonExample = () => {
  return (
    <ScrollView style={styles.container}>
      <Block style={{ gap: 10, marginBottom: 30 }}>
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Custom"
          size="sm"
          primary
          half
          disabled
          style={{
            container: {
              backgroundColor: "red",
            },
            text: {
              color: "white",
            },
            leftSlot: {
              color: "white",
            },
            rightSlot: {
              color: "white",
            },
          }}
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
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="xs"
          secondary
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="sm"
          secondary
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="md"
          secondary
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="lg"
          secondary
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="xl"
          secondary
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="xxl"
          secondary
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="xs"
          tertiary
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="sm"
          tertiary
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="md"
          tertiary
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="lg"
          tertiary
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="xl"
          tertiary
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="xxl"
          tertiary
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="xs"
          primary
          disabled
          outline
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="xs"
          secondary
          disabled
          outline
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="xs"
          tertiary
          disabled
          outline
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="xs"
          primary
          disabled
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="xs"
          secondary
          disabled
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="xs"
          tertiary
          disabled
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="xs"
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="xs"
          secondary
          outline
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="xs"
          tertiary
          outline
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="xs"
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
