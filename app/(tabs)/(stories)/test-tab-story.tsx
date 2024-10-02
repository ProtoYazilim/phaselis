import TabItem from "@phaselis/components/tab-view/TabItem";
import TestTab from "@phaselis/components/test-tab";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

function TabViewStory() {
  return (
    <SafeAreaView style={styles.container}>
      <TestTab activeTab={10}>
        <TabItem title="Personel">
          <Text>TAB CONTENT 1</Text>
        </TabItem>
        <TabItem title="Business">
          <Text>TAB CONTENT 2</Text>
        </TabItem>
      </TestTab>
    </SafeAreaView>
  );
}

export default TabViewStory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ea2538",
  },
});
