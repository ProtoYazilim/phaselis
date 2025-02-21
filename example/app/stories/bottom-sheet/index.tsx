import StoryView from "../../../src/StoryView";
import {
  Button,
  BottomSheet,
  Block,
  useColors,
  type PhaselisColors,
} from "phaselis";
import { useState } from "react";
import { Text, View } from "react-native";

function BottomSheetStory() {
  const [isOpen1, setIsOpen1] = useState(false);
  const Colors = useColors<PhaselisColors>();

  return (
    <StoryView>
      <Block>
        <Button
          text="Open Bottom Sheet"
          variation="primary_outline"
          leftIcon="Eye"
          size="xl"
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
        <View style={{ padding: 32 }}>
          <Text style={{ color: Colors.Primary[950] }}>
            Suspendisse aliquam venenatis lacus feugiat condimentum.
          </Text>
          <Text />
          <Text style={{ color: Colors.Primary[950] }}>
            In in tristique risus, quis pretium nunc. Cras viverra augue ac urna
            luctus feugiat. Pellentesque dapibus scelerisque elit, et semper
            erat.
          </Text>
        </View>
      </BottomSheet>
    </StoryView>
  );
}

export default BottomSheetStory;
