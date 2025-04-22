import { StyleSheet, Pressable, Alert } from "react-native";
import { Block, Label, Button, Textfield } from "phaselis";
import StoryView from "../../src/StoryView";
import { useRef, useState, useEffect, type ElementRef } from "react";

const PinNumbersView = () => {
  const PIN_LENGTH = 5;
  const [otp, setOtp] = useState(Array(PIN_LENGTH).fill(""));
  const [activeInputIndex, setActiveInputIndex] = useState(0);
  const inputRefs = useRef<Array<any>>([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, PIN_LENGTH);

    if (inputRefs.current[activeInputIndex]) {
      inputRefs.current[activeInputIndex].focus();
    }
  }, [activeInputIndex]);

  const handleChange = (text: string, index: number) => {
    if (errorMessage) setErrorMessage("");

    if (!/^\d*$/.test(text)) return;

    const newOtp = [...otp];

    if (text.length > 1) {
      const pastedChars = text.split("").slice(0, PIN_LENGTH - index);
      pastedChars.forEach((char, i) => {
        if (index + i < PIN_LENGTH) newOtp[index + i] = char;
      });

      setOtp(newOtp);
      const newFocusIndex = Math.min(
        index + pastedChars.length,
        PIN_LENGTH - 1,
      );
      setActiveInputIndex(newFocusIndex);
      return;
    }

    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < PIN_LENGTH - 1) {
      setActiveInputIndex(index + 1);
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      setActiveInputIndex(index - 1);
    }
  };

  const verifyOtp = () => {
    const otpCode = otp.join("");
    if (otpCode.length === PIN_LENGTH) {
      setErrorMessage("");
      Alert.alert("Success", `OTP code: ${otpCode} verified!`);
    } else {
      setErrorMessage(`Please enter all ${PIN_LENGTH} digits`);
    }
  };

  const handleResendOtp = () => {
    console.log("Resend OTP");
  };

  return (
    <StoryView style={styles.container}>
      <Block style={{ paddingVertical: 32, alignItems: "center", gap: 16 }}>
        <Label variation="h3" bold>
          Verification Code
        </Label>
        <Block style={{ alignItems: "center" }}>
          <Label variation="p" style={{ text: { textAlign: "center" } }}>
            Enter the 5-digit OTP code sent to
          </Label>
          <Label variation="p" bold style={{ text: { marginTop: 4 } }}>
            081234567891
          </Label>
        </Block>
      </Block>
      <Block
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          marginTop: 8,
        }}
      >
        <Label variation="small">Haven't got the confirmation code yet?</Label>
        <Pressable onPress={handleResendOtp}>
          <Label
            variation="small"
            bold
            style={{
              text: { marginLeft: 4 },
            }}
          >
            Resend
          </Label>
        </Pressable>
      </Block>

      <Block
        style={{ paddingTop: 16, gap: 24, width: "100%", alignItems: "center" }}
      >
        <Block
          style={{ flexDirection: "row", gap: 8, justifyContent: "center" }}
        >
          {Array(PIN_LENGTH)
            .fill(0)
            .map((_, index) => (
              <Textfield
                key={index}
                style={{
                  container: {
                    width: 62,
                    height: 96,
                    borderWidth: 2,
                    borderRadius: 8,
                    borderColor:
                      activeInputIndex === index ? "#3498db" : "#000",
                    justifyContent: "center",
                  },
                  text: {
                    fontSize: 40,
                    fontWeight: "700",
                    textAlign: "center",
                  },
                }}
                value={otp[index]}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={({ nativeEvent }) =>
                  handleKeyPress({ nativeEvent }, index)
                }
                keyboardType="numeric"
                maxLength={1}
                ref={(el: ElementRef<typeof Textfield> | null) =>
                  (inputRefs.current[index] = el)
                }
                onFocus={() => setActiveInputIndex(index)}
              />
            ))}
        </Block>

        {errorMessage && (
          <Label variation="small" style={{ text: { color: "red" } }}>
            {errorMessage}
          </Label>
        )}

        <Block style={{ width: "80%" }}>
          <Button text="Verify Code" onPress={verifyOtp} />
        </Block>
      </Block>
    </StoryView>
  );
};

export default PinNumbersView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  instructionText: {
    textAlign: "center",
  },
});
