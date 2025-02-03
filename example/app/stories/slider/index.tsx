import type { FormReference } from "phaselis";
import { useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Slider, Form, Colors } from "phaselis";
import StoryView from "../../../src/StoryView";
import StorySection from "../../../src/StorySection";

const SliderStory = () => {
  const refForm = useRef<FormReference>(null);
  const [sliderValue, setSliderValue] = useState(45);

  const handleSliderChange = (_e: any, value: number) => {
    setSliderValue(value);
  };

  return (
    <StoryView>
      <StorySection leftText="Usage" rightText="Default">
        <Form ref={refForm}>
          <View
            style={{
              paddingVertical: 32,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Text style={styles.text}>0</Text>
              <Slider
                name="slider"
                value={45}
                step={5}
                onChange={handleSliderChange}
              />
              <Text style={styles.text}>100</Text>
            </View>
            <Text style={[{ textAlign: "center" }]}>{sliderValue}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Button
              text="Reset"
              leftIcon="RefreshCw"
              onClick={() => {
                refForm.current?.setValues({ slider: 0 });
                setSliderValue(0);
              }}
            />
            <Button
              text="Set Value (50)"
              onClick={() => {
                refForm.current?.setValues({ slider: 50 });
                setSliderValue(50);
              }}
            />
          </View>
        </Form>
      </StorySection>
      <StorySection leftText="Usage" rightText="Default">
        <View
          style={{
            paddingVertical: 32,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
            }}
          >
            <Text style={styles.disabledText}>0</Text>
            <Slider
              name="slider2"
              disabled
              value={sliderValue}
              partofform={false}
              onChange={handleSliderChange}
            />
            <Text style={styles.disabledText}>100</Text>
          </View>
          <Text style={[styles.disabledText, { textAlign: "center" }]}>
            {sliderValue}
          </Text>
        </View>
      </StorySection>
    </StoryView>
  );
};

export default SliderStory;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 16,
    color: Colors.Primary[950],
    width: 30,
    textAlign: "center",
  },
  disabledText: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 16,
    color: Colors.Primary[300],
  },
});
