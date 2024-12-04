import { Switch } from "@phaselis/components";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

function SwitchStory() {
  return (
    <SafeAreaView style={styles.container}>
      <Switch
        name="1"
        LeftSlot={() => <Text>Off</Text>}
        RightSlot={() => <Text>On</Text>}
      />
      <Switch name="2" value={true} />
      <Switch name="5" showIcons={true} />
      <Switch name="6" showIcons value={true} />
      <Switch name="3" disabled />
      <Switch name="4" disabled value={true} />
      <Switch name="7" showIcons disabled />
      <Switch name="8" showIcons disabled value={true} />
    </SafeAreaView>
  );
}

export default SwitchStory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    gap: 10,
  },
});
