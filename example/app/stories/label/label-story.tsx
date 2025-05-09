import { Block, Label, Button } from "phaselis";
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
      <Label
        text="H1 48px"
        variation="h1"
        italic={isItalic}
        bold={isBold}
        style={{
          text: {
            color: "blue",
          },
          container: {
            padding: 30,
          },
        }}
        containerStyle={{ backgroundColor: "red" }}
      />
      {/* <Label text="H2 34px" variation="h2" italic={isItalic} bold={isBold} />
      <Label text="H3 28px" variation="h3" italic={isItalic} bold={isBold} />
      <Label text="H4 22px" variation="h4" italic={isItalic} bold={isBold} />
      <Label text="H5 18px" variation="h5" italic={isItalic} bold={isBold} />
      <Label text="H6 16px" variation="h6" italic={isItalic} bold={isBold} />
      <Label text="P 16px" variation="p" italic={isItalic} bold={isBold} />
      <Label
        text="Quot “Roboto Serif 14px”"
        variation="quot"
        italic={isItalic}
        bold={isBold}
      />
      <Label
        text="Small Roboto Regular 14px"
        variation="quot"
        italic={isItalic}
        bold={isBold}
      /> */}
    </ScrollView>
  );
}

export default LabelStory;
