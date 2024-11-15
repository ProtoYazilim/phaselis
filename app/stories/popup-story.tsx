import { Block, Button, Popup } from "@phaselis/components";
import { set } from "lodash";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

function PopupStory() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Block style={{ marginLeft: 10, marginRight: 10, gap: 10 }}>
        <Button
          text="Show Popup"
          onClick={() => {
            setShow(true);
          }}
        />
        <Button
          text="Show Info"
          onClick={() => {
            setShow1(true);
          }}
        />
        <Button
          text="Show Warning"
          onClick={() => {
            setShow2(true);
          }}
        />
        <Button
          text="Show Error"
          onClick={() => {
            setShow3(true);
          }}
        />
        <Button
          text="Show Success"
          onClick={() => {
            setShow4(true);
          }}
        />
      </Block>
      <Popup
        show={show}
        onClose={() => {
          setShow(false);
        }}
      >
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          dolores quos iure tenetur eius accusantium blanditiis, officia labore
          molestias corporis enim consequatur cum deserunt quae error cumque,
          eaque facilis dolorum!
        </Text>
      </Popup>
      <Popup
        show={show1}
        onClose={() => {
          setShow1(false);
        }}
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
        show={show2}
        onClose={() => {
          setShow2(false);
        }}
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
        show={show3}
        onClose={() => {
          setShow3(false);
        }}
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
        show={show4}
        onClose={() => {
          setShow4(false);
        }}
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
