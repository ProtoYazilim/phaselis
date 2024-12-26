import { Avatar, Block } from "phaselis";
import { StyleSheet } from "react-native";
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
        <Avatar img="/Users/aliberkislam/Development/phaselis/app/stories/assets/phaselis.png" />
        <Avatar circle text="XX" />
        <Avatar circle size="xs" text="XX" />
        <Avatar circle size="sm" text="XX" />
        <Avatar circle size="md" text="XX" />
        <Avatar circle size="lg" text="XX" />
        <Avatar circle size="xl" text="XX" />
        <Avatar rounded text="XX" />
        <Avatar rounded size="xs" text="XX" />
        <Avatar rounded size="sm" text="XX" />
        <Avatar rounded size="md" text="XX" />
        <Avatar rounded size="lg" text="XX" />
        <Avatar rounded size="xl" text="XX" />
        <Avatar square text="XX" />
        <Avatar square size="xs" text="XX" />
        <Avatar square size="sm" text="XX" />
        <Avatar square size="md" text="XX" />
        <Avatar square size="lg" text="XX" />
        <Avatar square size="xl" text="XX" />
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
