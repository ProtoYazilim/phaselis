import { Block, Button } from "phaselis";
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
        >
          Custom
        </Button>
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
