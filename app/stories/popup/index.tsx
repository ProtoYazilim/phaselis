import StoryView from "appSrc/StoryView";
import { Block, Button, Popup } from "phaselis";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

function PopupStory() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  return (
    <StoryView>
      <Block style={{ gap: 16 }}>
        <Button
          text="Default Popup"
          onClick={() => {
            setShow(true);
          }}
        />
        <Button
          text="Info Popup"
          style={{
            container: { backgroundColor: "#048DB6", borderColor: "#048DB6" },
          }}
          onClick={() => {
            setShow1(true);
          }}
        />
        <Button
          text="Warning Popup"
          style={{
            container: { backgroundColor: "#E29400", borderColor: "#E29400" },
          }}
          onClick={() => {
            setShow2(true);
          }}
        />
        <Button
          text="Error Popup"
          style={{
            container: { backgroundColor: "#DC3545", borderColor: "#DC3545" },
          }}
          onClick={() => {
            setShow3(true);
          }}
        />
        <Button
          text="Success Popup"
          style={{
            container: { backgroundColor: "#009F77", borderColor: "#009F77" },
          }}
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
        variation="info"
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
        variation="warning"
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
        variation="error"
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
        variation="success"
        leftIcon="CheckCheck"
      >
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          dolores quos iure tenetur eius accusantium blanditiis, officia labore
          molestias corporis enim consequatur cum deserunt quae error cumque,
          eaque facilis dolorum!
        </Text>
      </Popup>
    </StoryView>
  );
}

export default PopupStory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
  },
});
