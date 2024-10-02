import { Link } from "@phaselis/components";
import React from "react";
import { View } from "react-native";

const LinkStory = () => {
  return (
    <View
      style={{ padding: 10, backgroundColor: "white", height: "100%", gap: 10 }}
    >
      <Link
        text="HyperLink"
        href={"https://www.google.com"}
        leftIcon="Link"
        rightIcon="ExternalLink"
      />
      <Link
        text="Facebook"
        href={"https://www.google.com"}
        leftIcon="Facebook"
        rightIcon="ExternalLink"
        primary
      />
      <Link
        text="Twitter"
        href={"https://www.google.com"}
        leftIcon="Twitter"
        rightIcon="ExternalLink"
        secondary
      />
    </View>
  );
};

export default LinkStory;
