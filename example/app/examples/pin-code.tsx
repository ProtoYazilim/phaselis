import { StyleSheet, Pressable, Alert, TextInput } from "react-native";
import {
  Block,
  Label,
  Button,
  LucideIcon,
  useColors,
  type PhaselisColors,
} from "phaselis";
import StoryView from "../../src/StoryView";
import { useState } from "react";

const PinCodeView = () => {
  const Colors = useColors<PhaselisColors>();
  const [pin, setPin] = useState<string>("");
  const [showPin, setShowPin] = useState<boolean>(false);

  const handlePinChange = (text: string) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    if (numericValue.length <= 6) {
      setPin(numericValue);
    }
  };

  const handleConfirm = () => {
    if (pin.length === 6) {
      Alert.alert("PIN Verification", `Your PIN is: ${pin}`);
    } else {
      Alert.alert("Error", "Please enter your 6-digit PIN");
    }
  };

  const toggleShowPin = () => {
    setShowPin(!showPin);
  };

  const renderPinDots = () => {
    const dots = [];
    for (let i = 0; i < 6; i++) {
      if (i < pin.length) {
        dots.push(
          <Block key={i} style={{ alignItems: "center" }}>
            {showPin ? (
              <Label
                variation="h4"
                style={{
                  text: {
                    textAlign: "center",
                    width: 32,
                    height: 32,
                  },
                }}
              >
                {pin[i]}
              </Label>
            ) : (
              <LucideIcon
                name="CircleDot"
                width={32}
                height={32}
                style={{ color: Colors.Shades.black }}
              />
            )}
          </Block>,
        );
      } else {
        dots.push(
          <LucideIcon
            key={i}
            name="Circle"
            width={32}
            height={32}
            style={{ color: Colors.Shades.black }}
          />,
        );
      }
    }
    return dots;
  };

  return (
    <StoryView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <Block
        style={{
          paddingVertical: 32,
          alignItems: "center",
          gap: 16,
        }}
      >
        <LucideIcon
          name="LockKeyholeOpen"
          size="xxl"
          strokeWidth={2}
          style={{ color: Colors.Shades.black }}
        />
        <Label variation="h3" bold>
          Unlock
        </Label>
        <Label variation="p">Enter your PIN to unlock screen. </Label>
      </Block>
      <Block style={{ paddingTop: 32, gap: 32, width: "80%" }}>
        <Block
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Label variation="h4">Enter Your 6 Digits PIN</Label>
        </Block>

        <Block style={{ gap: 16, justifyContent: "center" }}>
          <Block
            style={{ flexDirection: "row", gap: 16, justifyContent: "center" }}
          >
            {renderPinDots()}
          </Block>

          <TextInput
            style={styles.hiddenInput}
            value={pin}
            onChangeText={handlePinChange}
            keyboardType="numeric"
            maxLength={6}
            secureTextEntry={!showPin}
            autoFocus
          />

          <Block
            style={{ flexDirection: "row", gap: 10, justifyContent: "center" }}
          >
            <Label variation="p">Show your pin</Label>
            <Pressable onPress={toggleShowPin}>
              <LucideIcon
                name={showPin ? "EyeOff" : "Eye"}
                size="lg"
                strokeWidth={2}
                style={{ color: Colors.Shades.black }}
              />
            </Pressable>
          </Block>
        </Block>
      </Block>

      <Block style={{ paddingTop: 32, width: "80%" }}>
        <Button text="Confirm" size="lg" onPress={handleConfirm} />
      </Block>
    </StoryView>
  );
};

export default PinCodeView;

const styles = StyleSheet.create({
  hiddenInput: {
    position: "absolute",
    width: 1,
    height: 1,
    opacity: 0,
  },
});
