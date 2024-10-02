import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { Textfield, Badge } from "@phaselis/components";

const Avatar = (props: { text: string }) => {
  return (
    <View
      style={{
        backgroundColor: "grey",
        borderRadius: 26,
        height: 52,
        width: 52,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          color: "white",
        }}
      >
        {props.text}
      </Text>
    </View>
  );
};

const BadgeStory = () => {
  return (
    <View style={styles.container}>
      <Badge text="1" primary left={-15} top={-4}>
        <Textfield />
      </Badge>
      <Badge text="999+" secondary left={-20} top={-4}>
        <Avatar text="NA" />
      </Badge>
      <Badge text="99+" tertiary left={-20} top={-4}>
        <Avatar text="VA" />
      </Badge>
      <Badge text="9+" primary outline left={-20} top={-4}>
        <Avatar text="AE" />
      </Badge>
      <Badge text="xxx" secondary outline left={-20} top={-4}>
        <Avatar text="SY" />
      </Badge>
      <Badge text="0v0" tertiary outline left={-20} top={-4}>
        <Avatar text="BM" />
      </Badge>
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
      <Badge text="Badge" tertiary outline left={10} top={85}>
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
