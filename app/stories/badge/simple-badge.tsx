import React from "react";
import { View, StyleSheet } from "react-native";

import { Badge } from "@phaselis/components";

const BadgeStory = () => {
  return (
    <View style={styles.container}>
      <Badge text="Badge" primary left={10} top={10}>
        <></>
      </Badge>
      <Badge text="Badge" secondary left={10} top={25}>
        <></>
      </Badge>
      <Badge text="Badge" tertiary left={10} top={40}>
        <></>
      </Badge>
      <Badge text="Badge" primary outline left={10} top={55}>
        <></>
      </Badge>
      <Badge text="Badge" secondary outline left={10} top={70}>
        <></>
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
