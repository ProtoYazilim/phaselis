import type { PhaselisColors } from "phaselis";
import { Block, Button, useColors } from "phaselis";
import { StyleSheet, ScrollView } from "react-native";

const DemoButton = (props: any) => {
  const Colors = useColors<PhaselisColors>();
  return (
    <Button
      style={{
        container: {
          borderWidth: 2,
          borderRadius: 52,
          //@ts-ignore
          variants: {
            base: {
              primary: {
                backgroundColor: "#eb2128",
                borderColor: "#6d6e71",
              },
              secondary: {
                backgroundColor: Colors.Secondary[500],
                borderColor: Colors.Secondary[600],
              },
            },
            outline: {
              primary: {
                backgroundColor: Colors.Transparent,
                borderColor: "#6d6e71",
              },
              secondary: {
                backgroundColor: Colors.Transparent,
                borderColor: Colors.Secondary[600],
              },
            },
          },
        },
      }}
      {...props}
    />
  );
};

const FullCustomStyling = () => {
  return (
    <ScrollView style={styles.container}>
      <Block style={{ gap: 10, marginBottom: 30 }}>
        <DemoButton text="My Demo Button" />
        <DemoButton text="My Demo Button Secondary" variation="secondary" />
        <DemoButton text="My Demo Button" variation="primary_outline" />
        <DemoButton
          text="My Demo Button Secondary"
          variation="secondary_outline"
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
