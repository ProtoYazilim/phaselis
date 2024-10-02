import { Label } from "@phaselis/components";
import { ScrollView } from "react-native-gesture-handler";

function LabelStory() {
  return (
    <ScrollView>
      <Label text="Header 1" preset="h1" style={{ text: { color: "red" } }} />
      <Label text="Header 2" preset="h2" />
      <Label text="Header 3" preset="h3" />
      <Label text="Header 4" preset="h4" />
      <Label text="Header 5" preset="h5" />
      <Label text="Header 6" preset="h6" />
      <Label text="paragraf" preset="p" />
      <Label text="small" preset="small" />
      <Label text="bold" style={{ text: { fontWeight: "bold" } }} />
      <Label text="italic" style={{ text: { fontStyle: "italic" } }} />
      <Label
        text="semi-bold italic"
        style={{ text: { fontStyle: "italic", fontWeight: 600 } }}
      />
    </ScrollView>
  );
}

export default LabelStory;
