import { Button, Colors, Image } from "phaselis";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "expo-router";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { phaselis_logo_image } from "./assets";

export default function Index() {
  const navigation = useNavigation();

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
    <View style={styles.container}>
      <Image
        source={{ uri: phaselis_logo_image.uri }}
        width={(phaselis_logo_image.width ?? 0) * 0.8}
        height={(phaselis_logo_image.height ?? 0) * 0.8}
      />
      <Text style={styles.title}>Welcome to Phaselis Usages</Text>
      <Text style={styles.description}>
        You can find various component stories on theese pages!
      </Text>
      <Text style={styles.instructions}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
    backgroundColor: "white",
  },
  title: {
    fontSize: 38,
    fontWeight: 300,
    textAlign: "center",
    lineHeight: 38,
    color: Colors.Primary[500],
  },
  description: {
    fontSize: 22,
    fontWeight: 300,
    textAlign: "center",
    lineHeight: 25,
    color: Colors.Primary[400],
  },
  instructions: {
    fontSize: 14,
    fontWeight: 400,
    textAlign: "center",
    lineHeight: 16,
    color: Colors.Primary[600],
  },
});
