import { View, StyleSheet } from "react-native";
import { Textfield, Badge } from "phaselis";

const BadgeStory = () => {
  return (
    <View style={styles.container}>
      <Badge text="1" variation="primary" left={-15} top={-4}>
        <Textfield />
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
