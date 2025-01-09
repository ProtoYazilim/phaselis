import React, { FC } from "react";
import { Spacings } from "phaselis";
import { ScrollView } from "react-native";

const StoryView: FC<{
  children: React.ReactNode;
  style?: any;
}> = ({ children, style }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        gap: Spacings.XL,
        padding: 24,
        backgroundColor: "white",
        ...style,
      }}
    >
      {children}
    </ScrollView>
  );
};

export default StoryView;
