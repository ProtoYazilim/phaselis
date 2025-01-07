import { Button, BottomSheet, Block } from "phaselis";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

function BottomSheetStory() {
  const [isOpen1, setIsOpen1] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Block style={{ margin: 24 }}>
        <Button
          text="Open Bottom Sheet"
          variation="primary_outline"
          leftIcon="Eye"
          size="xl"
          // style={{ container: { height: 96 } }}
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
    </SafeAreaView>
  );
}

export default BottomSheetStory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
