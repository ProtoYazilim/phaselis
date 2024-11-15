import { Block, Label } from "@phaselis/components";
import React from "react";
import { StyleSheet, ScrollView } from "react-native";

const PresetDemo = () => {
  return (
    <ScrollView style={styles.container}>
      <Block style={{ gap: 10, marginBottom: 30 }}>
        <Label text="BKT Demo" preset="bkt_demo" />
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

export default PresetDemo;
