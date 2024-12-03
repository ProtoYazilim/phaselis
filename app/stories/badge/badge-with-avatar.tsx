import React from "react";
import { View, StyleSheet } from "react-native";

import { Badge, Avatar } from "@phaselis/components";

const BadgeStory = () => {
  return (
    <View style={styles.container}>
      <Badge text="999+" secondary left={-20} top={-4}>
        <Avatar text="NA" />
      </Badge>
      <Badge text="999+" secondary left={-20} top={-4}>
        <Avatar rounded text="NA" />
      </Badge>
      <Badge text="999+" secondary left={-20} top={-4}>
        <Avatar square text="NA" />
      </Badge>
      <Badge text="99+" tertiary left={-20} top={-4}>
        <Avatar text="NA" />
      </Badge>
      <Badge text="9+" primary outline left={-20} top={-4}>
        <Avatar text="NA" />
      </Badge>
      <Badge text="xxx" secondary outline left={-20} top={-4}>
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
