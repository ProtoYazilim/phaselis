import React, { useRef } from "react";
import { ScrollView, Text, View } from "react-native";

import { FormReference } from "@phaselis/components/form";
import { required } from "@phaselis/utils";
import { Block, Button, Select, InputGroup, Form } from "@phaselis/components";

const SelectStory = () => {
  const refForm = useRef<FormReference>(null);
  const handleLogin = () => {
    refForm.current?.validateAll();
  };

  return (
    <ScrollView style={{ padding: 10, backgroundColor: "white" }}>
      <Form ref={refForm}>
        <Block style={{ gap: 20, width: "100%" }}>
          <InputGroup label="Custom Select" message="test123123">
            <Select
              name="4"
              leftIcon="Star"
              size="md"
              validations={[required("required")]}
              closeOnSelect={false}
              NoOptionSlot={() => (
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 16,
                    height: 100,
                    backgroundColor: "#e4e4e4",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#00d882",
                      fontStyle: "italic",
                    }}
                  >
                    No option available
                  </Text>
                </View>
              )}
              options={[
                { value: "1", label: "Option 1", subLabel: "1 text" },
                { value: "2", label: "Option 2" },
                { value: "3", label: "Option 3" },
                { value: "4", label: "Option 4" },
                { value: "5", label: "Option 5" },
                { value: "6", label: "Option 6" },
                { value: "7", label: "Option 7" },
                { value: "8", label: "Option 8" },
                { value: "9", label: "Option 9" },
                { value: "10", label: "Option 10" },
                { value: "11", label: "Option 11" },
                { value: "12", label: "Option 12" },
                { value: "13", label: "Option 13" },
                { value: "14", label: "Option 14" },
                { value: "15", label: "Option 15" },
                { value: "16", label: "Option 16" },
                { value: "17", label: "Option 17" },
                { value: "18", label: "Option 18" },
                { value: "19", label: "Option 19" },
                { value: "20", label: "Option 20" },
              ]}
              pickerType="custom"
              maxHeightModal={"50%"}
              InputSlot={({ selectedItem, defaultStyle }) => (
                <>
                  <Text>{selectedItem?.label || "Select option (Custom)"}</Text>
                  {selectedItem?.subLabel ? (
                    <Text>{selectedItem?.subLabel}</Text>
                  ) : null}
                </>
              )}
              OptionSlot={({
                option,
              }: {
                option: { label: string; value: string; subLabel?: string };
              }) => (
                <Block
                  style={{
                    padding: 10,
                    margin: 10,
                    backgroundColor: "lightgray",
                    borderRadius: 20,
                  }}
                >
                  <Text style={{ color: "black" }}>{option.label}</Text>
                  {option?.subLabel ? <Text>{option?.subLabel}</Text> : null}
                </Block>
              )}
              HeaderSlot={() => (
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "center",
                    backgroundColor: "lightblue",
                    padding: 10,
                  }}
                >
                  <Text>Custom Picker Header</Text>
                </View>
              )}
              closeIcon="SearchX"
            />
          </InputGroup>
        </Block>
        <Block style={{ gap: 20, width: "100%" }}>
          <InputGroup label="Native Select" message="test123123">
            <Select
              name="5"
              leftIcon="Star"
              size="md"
              validations={[required("required")]}
              options={[
                { value: "1", label: "Option 1", subLabel: "1 text" },
                { value: "2", label: "Option 2" },
                { value: "3", label: "Option 3" },
                { value: "4", label: "Option 4" },
                { value: "5", label: "Option 5" },
              ]}
              pickerType="native"
            />
          </InputGroup>
        </Block>
        <Block style={{ gap: 10, marginTop: 10 }}>
          <Button text="Submit" onClick={handleLogin} />
          <Button text="Reset" type="reset" />
        </Block>
      </Form>
      <Block style={{ gap: 10 }}>
        {/* <Select options={[]} size="xs" disabled />
        <Select options={[]} size="sm" disabled />
        <Select options={[]} size="md" disabled />
        <Select options={[]} size="lg" disabled />
        <Select options={[]} size="xl" disabled />
        <Select options={[]} size="xxl" disabled /> */}
      </Block>
    </ScrollView>
  );
};

export default SelectStory;
