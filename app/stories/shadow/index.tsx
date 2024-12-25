import { Block, Button, Textfield, Form,required } from "phaselis";
import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
const ShadowExample = () => {
  return (
    <ScrollView style={styles.container}>
      <Block style={{ gap: 30, marginBottom: 30 }}>
        <Form>
          <Textfield
            name="123"
            validations={[required("wtf")]}
            style={{
              container: {
                backgroundColor: "white",
                shadows: [{}, {}],
                variants: {
                  error: {
                    true: {
                      backgroundColor: "white",
                      shadows: [
                        {
                          color: "#FCF596",
                          opacity: 0.8,
                          radius: 12,
                          offset: [-5, -3],
                        },
                        {
                          color: "#FF4545",
                          opacity: 0.8,
                          radius: 12,
                          offset: [5, 3],
                        },
                      ],
                    },
                  },
                },
              },
            }}
          />
          <Button type="submit" />
        </Form>
        <Button
          leftIcon="Apple"
          rightIcon="ChevronRight"
          text="Custom"
          size="sm"
          disabled
          style={{
            container: {
              backgroundColor: "yellow",
            },
            text: {
              color: "white",
            },
            leftSlot: {
              color: "white",
            },
            rightSlot: {
              color: "white",
            },
          }}
        >
          Custom
        </Button>
        <Block
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            shadows: [
              {
                color: "#FCF596",
                opacity: 0.4,
                radius: 12,
                offset: [-5, -3],
              },
              {
                color: "#FF4545",
                opacity: 0.4,
                radius: 12,
                offset: [5, 3],
              },
            ],
            lineerGradient: {
              colors: ["#FCF596", "#FF4545"], // background array ise, renkleri al
              angle: 170,
              useAngle: true,
              angleCenter: { x: 0.5, y: 0.5 },
            },
          }}
        >
          <Text style={{ color: "white" }}>Fancy</Text>
        </Block>
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

export default ShadowExample;
