import { Block, Button } from "@phaselis/components";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { usePopup } from "@phaselis/hooks";

function PopupStory() {
  const [showDefault, setShowDefault] = usePopup(
    "default",
    <Text>Popup Content ADADAD</Text>,
    {
      title: "Default Popup",
      duration: 1000,
      style: { backgroundColor: "red" },
    },
  );
  const [showInfo, setShowInfo] = usePopup("info", <Text>Popup Content</Text>);
  const [showWarning, setShowWarning] = usePopup(
    "warning",
    <Text>Popup Content</Text>,
    {
      style: { container: { backgroundColor: "yellow" } },
      leftIcon: "SquareX",
      title: "Warning Popup Test",
    },
  );
  const [showError, setShowError] = usePopup(
    "error",
    <Text>Popup Content</Text>,
  );
  const [showSuccess, setShowSuccess] = usePopup(
    "success",
    <Text>Popup Content</Text>,
  );

  return (
    <SafeAreaView style={styles.container}>
      <Block style={{ marginLeft: 10, marginRight: 10, gap: 10 }}>
        <Button
          text="Show Default Popup"
          onClick={() => {
            setShowDefault?.("show");
          }}
        />
        <Button
          text="Show Info Popup"
          onClick={() => {
            setShowInfo?.("show");
          }}
        />
        <Button
          text="Show Warning Popup"
          onClick={() => {
            setShowWarning?.("show");
          }}
        />
        <Button
          text="Show Error Popup"
          onClick={() => {
            setShowError?.("show");
          }}
        />
        <Button
          text="Show Success Popup"
          onClick={() => {
            setShowSuccess?.("show");
          }}
        />
      </Block>
    </SafeAreaView>
  );
}

export default PopupStory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
