import { Avatar, Block } from "phaselis";
import { StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const AvatarStory = () => {
  return (
    <ScrollView style={styles.container}>
      <Block style={{ gap: 10 }}>
        <Avatar
          style={{
            container: {
              backgroundColor: "red",
            },
            icon: {
              color: "white",
            },
          }}
          iconName="Umbrella"
          size="md"
        />
        <Text>Avatar Test</Text>
      </Block>
    </ScrollView>
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

export default AvatarStory;
