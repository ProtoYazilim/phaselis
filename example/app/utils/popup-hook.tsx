import { Block, Button, usePopup } from "phaselis";
import { SafeAreaView, StyleSheet, Text } from "react-native";

function PopupStory() {
  const [_showDefault, setShowDefault] = usePopup(
    "default",
    <Text>Default usePopup</Text>,
    {
      title: "Default Popup",
      style: { backgroundColor: "red" },
    },
  );
  const [_showInfo, setShowInfo] = usePopup(
    "info",
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolore,
      laudantium eligendi saepe natus deleniti, ipsam dolorum nihil ducimus
      explicabo enim sunt vitae repellat quaerat culpa id tempore laborum iure.
      Aperiam ad iure id deleniti recusandae assumenda nisi quas quae.
    </Text>,
  );
  const [_showWarning, setShowWarning] = usePopup(
    "warning",
    <Text>warning usePopup</Text>,
  );
  const [_showError, setShowError] = usePopup(
    "error",
    <Text>error usePopup</Text>,
  );
  const [_showSuccess, setShowSuccess] = usePopup(
    "success",
    <Text>success usePopup</Text>,
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
