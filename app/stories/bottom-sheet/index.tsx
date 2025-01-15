import StoryView from "appSrc/StoryView";
import { Button, BottomSheet, Block } from "phaselis";
import React, { useState } from "react";
import { Text, View } from "react-native";

function BottomSheetStory() {
  const [isOpen1, setIsOpen1] = useState(false);

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
          <Text>Suspendisse aliquam venenatis lacus feugiat condimentum.</Text>
          <Text></Text>
          <Text>
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
