import { Block, Button } from "phaselis";
import React from "react";
import { StyleSheet, ScrollView } from "react-native";

const GeneratedStyleProp = () => {
  return (
    <ScrollView style={styles.container}>
      <Block style={{ gap: 10, marginBottom: 30 }}>
        <Button text="My Demo Button" />
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

export default GeneratedStyleProp;
