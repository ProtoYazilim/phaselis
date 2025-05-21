import { Block, Button, Popup, useColors, type PhaselisColors } from "phaselis";
import { useState } from "react";
import { Text } from "react-native";
import StoryView from "../../src/StoryView";

function PopupStory() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  const Colors = useColors<PhaselisColors>();

  return (
    <StoryView>
      <Block style={{ gap: 16 }}>
        <Button
          text="Default Popup"
          onClick={() => {
            setShow(true);
          }}
          style={{
            container: {
              backgroundColor: Colors.Primary[600],
              borderColor: Colors.Primary[600],
            },
          }}
        />
        <Button
          text="Default Popup with Blur"
          onClick={() => {
            setShow5(true);
          }}
          style={{
            container: {
              backgroundColor: Colors.Primary[600],
              borderColor: Colors.Primary[600],
            },
          }}
        />
        <Button
          text="Info Popup"
          style={{
            container: {
              backgroundColor: Colors.Info[600],
              borderColor: Colors.Info[600],
            },
          }}
          onClick={() => {
            setShow1(true);
          }}
        />
        <Button
          text="Warning Popup"
          style={{
            container: {
              backgroundColor: Colors.Warning[600],
              borderColor: Colors.Warning[600],
            },
          }}
          onClick={() => {
            setShow2(true);
          }}
        />
        <Button
          text="Error Popup"
          style={{
            container: {
              backgroundColor: Colors.Danger[600],
              borderColor: Colors.Danger[600],
            },
          }}
          onClick={() => {
            setShow3(true);
          }}
        />
        <Button
          text="Success Popup"
          style={{
            container: {
              backgroundColor: Colors.Success[600],
              borderColor: Colors.Success[600],
            },
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
        <Text style={{ color: Colors.Primary[950] }}>
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
        <Text style={{ color: Colors.Primary[950] }}>
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
        <Text style={{ color: Colors.Warning[950] }}>
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
        <Text style={{ color: Colors.Danger[950] }}>
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
        <Text style={{ color: Colors.Success[950] }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          dolores quos iure tenetur eius accusantium blanditiis, officia labore
          molestias corporis enim consequatur cum deserunt quae error cumque,
          eaque facilis dolorum!
        </Text>
      </Popup>
      <Popup
        show={show5}
        onClose={() => {
          setShow5(false);
        }}
        backgroundBlur
      >
        <Text style={{ color: Colors.Primary[950] }}>
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
