import { Button, BottomSheet, Block } from "@phaselis/components";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { useSharedValue } from "react-native-reanimated";

function BottomSheetStory() {
  const isOpen1 = useSharedValue(false);
  const isOpen2 = useSharedValue(false);

  const toggleSheet1 = () => {
    isOpen1.value = !isOpen1.value;
  };

  const toggleSheet2 = () => {
    isOpen2.value = !isOpen2.value;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Block style={{ margin: 10, gap: 10 }}>
        <Button text="Toggle bottom sheet fullscreen" onClick={toggleSheet1} />
        <Button text="Toggle bottom sheet normal" onClick={toggleSheet2} />
      </Block>

      <BottomSheet isOpen={isOpen1} onClose={toggleSheet1} fullScreen>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          dolores quos iure tenetur eius accusantium blanditiis, officia labore
          molestias corporis enim consequatur cum deserunt quae error cumque,
          eaque facilis dolorum!
        </Text>
      </BottomSheet>
      <BottomSheet isOpen={isOpen2} onClose={toggleSheet2}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          dolores quos iure tenetur eius accusantium blanditiis, officia labore
          molestias corporis enim consequatur cum deserunt quae error cumque,
          eaque facilis dolorum!
        </Text>
      </BottomSheet>
    </SafeAreaView>
  );
}

export default BottomSheetStory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
