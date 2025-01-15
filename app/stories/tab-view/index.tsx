import { TabItem, TabView } from "phaselis";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

function TabViewStory() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 20, marginLeft: 10, marginTop: 10 }}>
        Scrollable Tab View
      </Text>
      <TabView activeTab={2} scrollable>
        <TabItem title="Item 1">
          <Text>Tab Content 1</Text>
        </TabItem>
        <TabItem title="Item 2">
          <Text>Tab Content 2</Text>
        </TabItem>
        <TabItem title="Item 3">
          <Text>Tab Content 3</Text>
        </TabItem>
        <TabItem title="Item 4">
          <Text>Tab Content 4</Text>
        </TabItem>
        <TabItem title="Item 5">
          <Text>Tab Content 5</Text>
        </TabItem>
        <TabItem title="Item 6">
          <Text>Tab Content 6</Text>
        </TabItem>
      </TabView>
    </SafeAreaView>
  );
}

export default TabViewStory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    gap: 10,
  },
});
