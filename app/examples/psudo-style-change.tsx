import { Block, Textfield } from "@phaselis/components";
import React from "react";
import { StyleSheet, ScrollView } from "react-native";

const FullCustomStyling = () => {
  return (
    <ScrollView style={styles.container}>
      <Block style={{ gap: 10, marginBottom: 30 }}>
        <Textfield
          style={{
            container: {
              //@ts-ignore
              variants: {
                focus: {
                  true: {
                    borderColor: "red",
                  },
                },
                disabled: {
                  true: {
                    backgroundColor: "black",
                  },
                },
              },
            },
          }}
        />
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

export default FullCustomStyling;
