import FormStoryView from "@appSrc/FormStoryView";
import { Switch } from "@phaselis/components";
import React from "react";
import { Text } from "react-native";

function SwitchStory() {
  return (
    <FormStoryView
      style={{
        flex: 1,
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
      values={{
        theme: true,
        lights: true,
      }}
      scrollview={true}
    >
      <Switch
        name="theme"
        LeftSlot={() => <Text>Light</Text>}
        RightSlot={() => <Text>Dark</Text>}
      />
      <Switch
        name="lights"
        LeftSlot={() => <Text>Off</Text>}
        RightSlot={() => <Text>On</Text>}
        showIcons
      />
      <Switch
        name="switch"
        LeftSlot={() => <Text>Off</Text>}
        RightSlot={() => <Text>On</Text>}
        disabled
      />
    </FormStoryView>
  );
}

export default SwitchStory;
