import { Button, BottomSheet, Block } from "@phaselis/components";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

function BottomSheetStory() {
  const [isOpen1, setIsOpen1] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Block style={{ margin: 10, gap: 10 }}>
        <Button
          text="Open Bottom Sheet"
          onClick={() => {
            setIsOpen1(true);
          }}
        />
      </Block>
      <BottomSheet
        show={isOpen1}
        onClose={() => {
          setIsOpen1(false);
        }}
      >
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
