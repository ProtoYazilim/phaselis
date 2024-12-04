import { Link } from "@phaselis/components";
import React from "react";
import { View } from "react-native";

const LinkStory = () => {
  return (
    <View
      style={{ padding: 10, backgroundColor: "white", height: "100%", gap: 10 }}
    >
      <Link
        text="Proto Yazılım"
        href={"https://www.protoyazilim.com"}
        leftIcon="Link"
        rightIcon="ExternalLink"
      />
      <Link
        text="Facebook"
        href={"https://www.facebook.com"}
        canOpenURL
        leftIcon="Facebook"
        rightIcon="ExternalLink"
        primary
      />
      <Link
        text="Twitter"
        href={"https://www.x.com"}
        leftIcon="Twitter"
        rightIcon="ExternalLink"
        secondary
      />
      <Link
        text="SMS"
        href={"sms:+123456789"}
        leftIcon="MessageCircle"
        rightIcon="ExternalLink"
      />
    </View>
  );
};

export default LinkStory;
