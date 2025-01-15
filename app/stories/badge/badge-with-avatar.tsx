import React from "react";
import { View, StyleSheet } from "react-native";

import { Badge, Avatar } from "phaselis";

const BadgeStory = () => {
  return (
    <View style={styles.container}>
      <Badge text="999+" variation="secondary" left={-20} top={-4}>
        <Avatar text="NA" />
      </Badge>
      <Badge text="999+" variation="secondary" left={-20} top={-4}>
        <Avatar variation="rounded" text="NA" />
      </Badge>
      <Badge text="999+" variation="secondary" left={-20} top={-4}>
        <Avatar variation="square" text="NA" />
      </Badge>
      <Badge text="99+" variation="tertiary" left={-20} top={-4}>
        <Avatar text="NA" />
      </Badge>
      <Badge text="9+" variation="primary_outline" left={-20} top={-4}>
        <Avatar text="NA" />
      </Badge>
      <Badge text="xxx" variation="secondary_outline" left={-20} top={-4}>
        <Avatar text="NA" />
      </Badge>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 16,
    gap: 10,
  },
});

export default BadgeStory;
