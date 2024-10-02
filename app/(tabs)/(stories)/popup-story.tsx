import { Block, Button, Popup } from "@phaselis/components";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { useSharedValue } from "react-native-reanimated";

function PopupStory() {
  const isOpen = useSharedValue(false);

  const toggleSheet = () => {
    isOpen.value = !isOpen.value;
  };

  const isOpen2 = useSharedValue(false);

  const toggleSheet2 = () => {
    isOpen2.value = !isOpen2.value;
  };

  const isOpen3 = useSharedValue(false);

  const toggleSheet3 = () => {
    isOpen3.value = !isOpen3.value;
  };

  const isOpen4 = useSharedValue(false);

  const toggleSheet4 = () => {
    isOpen4.value = !isOpen4.value;
  };

  const isOpen5 = useSharedValue(false);

  const toggleSheet5 = () => {
    isOpen5.value = !isOpen5.value;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Block style={{ marginLeft: 10, marginRight: 10, gap: 10 }}>
        <Button text="Show Popup" onClick={toggleSheet} />
        <Button text="Show Info" onClick={toggleSheet2} />
        <Button text="Show Warning" onClick={toggleSheet3} />
        <Button text="Show Error" onClick={toggleSheet4} />
        <Button text="Show Success" onClick={toggleSheet5} />
      </Block>
      <Popup isOpen={isOpen} onClose={toggleSheet}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          dolores quos iure tenetur eius accusantium blanditiis, officia labore
          molestias corporis enim consequatur cum deserunt quae error cumque,
          eaque facilis dolorum!
        </Text>
      </Popup>
      <Popup
        isOpen={isOpen2}
        onClose={toggleSheet2}
        title="Info"
        style={{
          container: {
            backgroundColor: "#D8EEFF",
          },
        }}
        leftIcon="Info"
      >
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          dolores quos iure tenetur eius accusantium blanditiis, officia labore
          molestias corporis enim consequatur cum deserunt quae error cumque,
          eaque facilis dolorum!
        </Text>
      </Popup>
      <Popup
        isOpen={isOpen3}
        onClose={toggleSheet3}
        title="Warning"
        style={{
          container: {
            backgroundColor: "#FFFBC5",
          },
        }}
        leftIcon="MessageSquareWarning"
      >
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          dolores quos iure tenetur eius accusantium blanditiis, officia labore
          molestias corporis enim consequatur cum deserunt quae error cumque,
          eaque facilis dolorum!
        </Text>
      </Popup>
      <Popup
        isOpen={isOpen4}
        onClose={toggleSheet4}
        title="Error"
        style={{
          container: {
            backgroundColor: "#FEE6E5",
          },
        }}
        leftIcon="Bomb"
      >
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          dolores quos iure tenetur eius accusantium blanditiis, officia labore
          molestias corporis enim consequatur cum deserunt quae error cumque,
          eaque facilis dolorum!
        </Text>
      </Popup>
      <Popup
        isOpen={isOpen5}
        onClose={toggleSheet5}
        title="Success"
        style={{
          container: {
            backgroundColor: "#CEFDE8",
          },
        }}
        leftIcon="CheckCheck"
      >
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          dolores quos iure tenetur eius accusantium blanditiis, officia labore
          molestias corporis enim consequatur cum deserunt quae error cumque,
          eaque facilis dolorum!
        </Text>
      </Popup>
    </SafeAreaView>
  );
}

export default PopupStory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
