import { Colors } from "@phaselis/theme";
import { Button } from "@phaselis/components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "expo-router";
import React from "react";
import { View, StyleSheet, Text } from "react-native";

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
      <Text style={styles.title}>
        Welcome to the Component Story Navigation!
      </Text>
      <Text style={styles.description}>
        This is the Story page where you can find the navigation to various
        component stories.
      </Text>
      <Text style={styles.instructions}>
        Use the Drawer navigation to explore different component stories and
        examples.
      </Text>
      {lastStoryRouteName && (
        <Button
          primary
          text="Go to last story"
          onClick={() => {
            if (lastStoryRouteBase === null) {
              navigation.navigate(lastStoryRouteName as never);
            } else {
              navigation.navigate(lastStoryRouteBase, {
                screen: lastStoryRouteName,
              });
            }
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.Gray[100],
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: Colors.Primary[600],
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: Colors.Primary[500],
  },
  instructions: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    fontStyle: "italic",
    color: Colors.Gray[600],
  },
});
