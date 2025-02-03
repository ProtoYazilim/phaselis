import { Block, Button } from "phaselis";
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
          variation="primary"
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="sm"
          variation="primary"
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="md"
          variation="primary"
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="lg"
          variation="primary"
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="xl"
          variation="primary"
        />
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Start End"
          size="xxl"
          variation="primary"
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
