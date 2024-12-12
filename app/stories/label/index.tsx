import { Block, Label, Button } from "@phaselis/components";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

function LabelStory() {
  const [isItalic, setIsItalic] = useState<boolean>(false);
  const [isBold, setIsBold] = useState<boolean>(false);

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 16,
        gap: 32,
      }}
    >
      <Block style={{ flexDirection: "row", gap: 10 }}>
        <Button
          variation={isItalic ? "secondary" : "primary_outline"}
          leftIcon="Italic"
          onPress={() => setIsItalic(!isItalic)}
        />
        <Button
          variation={isBold ? "primary" : "primary_outline"}
          leftIcon="Bold"
          onPress={() => setIsBold(!isBold)}
        />
      </Block>
      <Label text="H1 48px" variant="h1" italic={isItalic} bold={isBold} />
      <Label text="H2 34px" variant="h2" italic={isItalic} bold={isBold} />
      <Label text="H3 28px" variant="h3" italic={isItalic} bold={isBold} />
      <Label text="H4 22px" variant="h4" italic={isItalic} bold={isBold} />
      <Label text="H5 18px" variant="h5" italic={isItalic} bold={isBold} />
      <Label text="H6 16px" variant="h6" italic={isItalic} bold={isBold} />
      <Label text="P 16px" variant="p" italic={isItalic} bold={isBold} />
      <Label
        text="Quot “Roboto Serif 14px”"
        variant="quot"
        italic={isItalic}
        bold={isBold}
      />
      <Label
        text="Small Roboto Regular 14px"
        variant="quot"
        italic={isItalic}
        bold={isBold}
      />
    </ScrollView>
  );
}

export default LabelStory;
