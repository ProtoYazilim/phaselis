import {
  Block,
  Button,
  useColors,
  usePopup,
  type PhaselisColors,
} from "phaselis";
import { SafeAreaView, StyleSheet, Text } from "react-native";

function PopupStory() {
  const Colors = useColors<PhaselisColors>();
  const [_showDefault, setShowDefault] = usePopup(
    "default",
    <Text style={{ color: Colors.Primary[950] }}>Default usePopup</Text>,
    {
      title: "Default Popup",
      style: { backgroundColor: "red" },
    },
  );
  const [_showInfo, setShowInfo] = usePopup(
    "info",
    <Text style={{ color: Colors.Primary[950] }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolore,
      laudantium eligendi saepe natus deleniti, ipsam dolorum nihil ducimus
      explicabo enim sunt vitae repellat quaerat culpa id tempore laborum iure.
      Aperiam ad iure id deleniti recusandae assumenda nisi quas quae.
    </Text>,
  );
  const [_showWarning, setShowWarning] = usePopup(
    "warning",
    <Text style={{ color: Colors.Primary[950] }}>warning usePopup</Text>,
  );
  const [_showError, setShowError] = usePopup(
    "error",
    <Text style={{ color: Colors.Primary[950] }}>error usePopup</Text>,
  );
  const [_showSuccess, setShowSuccess] = usePopup(
    "success",
    <Text style={{ color: Colors.Primary[950] }}>success usePopup</Text>,
  );

  return (
    <SafeAreaView style={styles.container}>
      <Block style={{ marginLeft: 10, marginRight: 10, gap: 10 }}>
        <Button
          text="Show Default Popup"
          onClick={() => {
            setShowDefault?.("show");
          }}
          style={{
            container: {
              backgroundColor: Colors.Primary[600],
              borderColor: Colors.Primary[600],
            },
          }}
        />
        <Button
          text="Show Info Popup"
          onClick={() => {
            setShowInfo?.("show");
          }}
          style={{
            container: {
              backgroundColor: Colors.Info[600],
              borderColor: Colors.Info[600],
            },
          }}
        />
        <Button
          text="Show Warning Popup"
          onClick={() => {
            setShowWarning?.("show");
          }}
          style={{
            container: {
              backgroundColor: Colors.Warning[600],
              borderColor: Colors.Warning[600],
            },
          }}
        />
        <Button
          text="Show Error Popup"
          onClick={() => {
            setShowError?.("show");
          }}
          style={{
            container: {
              backgroundColor: Colors.Danger[600],
              borderColor: Colors.Danger[600],
            },
          }}
        />
        <Button
          text="Show Success Popup"
          onClick={() => {
            setShowSuccess?.("show");
          }}
          style={{
            container: {
              backgroundColor: Colors.Success[600],
              borderColor: Colors.Success[600],
            },
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
