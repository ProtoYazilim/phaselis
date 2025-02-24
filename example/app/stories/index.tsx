import { Button, Image, useColors, type PhaselisColors } from "phaselis";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "expo-router";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { phaselis_logo_image } from "../../assets/logos";
import StoryView from "../../src/StoryView";

export default function Index() {
  const navigation = useNavigation();
  const Colors = useColors<PhaselisColors>();

  const [lastStoryRouteName, setLastStoryRouteName] = React.useState<
    string | null
  >(null);
  const [lastStoryRouteBase, setLastStoryRouteBase] = React.useState<
    string | null
  >(null);

  useFocusEffect(() => {
    AsyncStorage.getItem("lastStoryRouteName").then((routeName) => {
      // if (routeName && routeName !== "index") setLastStoryRouteName(routeName);
      setLastStoryRouteName(routeName);
    });
    AsyncStorage.getItem("lastStoryRouteBase").then((routeBase) => {
      // if (routeName && routeName !== "index") setLastStoryRouteName(routeName);
      setLastStoryRouteBase(routeBase);
    });
  });

  return (
    <StoryView style={{ gap: 0 }}>
      <Image
        source={{ uri: phaselis_logo_image.uri }}
        width={(phaselis_logo_image.width ?? 0) * 0.5}
        height={(phaselis_logo_image.height ?? 0) * 0.5}
        style={{ container: { alignItems: "center" } }}
      />
      <View style={styles.container}>
        <Text style={[styles.title, { color: Colors.Primary[500] }]}>
          Welcome to Phaselis Usages
        </Text>
        <Text style={[styles.description, { color: Colors.Primary[400] }]}>
          You can find various component stories on theese pages!
        </Text>
        <Text style={[styles.instructions, { color: Colors.Primary[500] }]}>
          Use the Drawer Navigation to explore different component stories and
          examples.
        </Text>
        {lastStoryRouteName && (
          <Button
            text="Go to last story"
            style={{ container: { width: 243 } }}
            onClick={() => {
              if (lastStoryRouteBase === null) {
                navigation.navigate(lastStoryRouteName as never);
              } else {
                // @ts-ignore
                navigation.navigate(lastStoryRouteBase, {
                  screen: lastStoryRouteName,
                });
              }
            }}
            variation="primary"
          />
        )}
      </View>
    </StoryView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
  },
  title: {
    fontSize: 48,
    fontWeight: 300,
    textAlign: "center",
    lineHeight: 48,
  },
  description: {
    fontSize: 28,
    fontWeight: 300,
    textAlign: "center",
    lineHeight: 32,
  },
  instructions: {
    fontSize: 18,
    fontWeight: 400,
    textAlign: "center",
    lineHeight: 20,
  },
});
