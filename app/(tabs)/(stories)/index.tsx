import { Label } from "@phaselis/components";
import React from "react";
import { View } from "react-native";

export default function Index() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Label text="Phaselis Native Framework" />
    </View>
  );
}
