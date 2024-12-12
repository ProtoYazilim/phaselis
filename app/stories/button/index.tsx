import StoryView from "@appSrc/StoryView";
import { PhaselisSpacings } from "@/src/theme";
import { Block, Button, useSpacings } from "@phaselis/components";
import React from "react";
import StorySection from "@/appSrc/StorySection";
const ButtonExample = () => {
  const Spacings = useSpacings<PhaselisSpacings>();
  const [screenProps, setScreenProps] = React.useState<any>({ primary: true });

  return (
    <StoryView>
      <StorySection leftText="Variation" rightText="Solid MD">
        <Block
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <Button
            text="Primary"
            variation="primary"
            necati
            onClick={() => {
              setScreenProps({ variation: "primary" });
            }}
          />
          <Button
            text="Secondary"
            variation="secondary"
            onClick={() => {
              setScreenProps({ variation: "secondary" });
            }}
          />
          <Button
            text="Tertiary"
            variation="tertiary"
            onClick={() => {
              setScreenProps({ variation: "tertiary" });
            }}
          />
          <Button
            text="outline"
            variation="primary_outline"
            half
            onClick={() => {
              setScreenProps({ variation: "primary_outline" });
            }}
          />
          <Button
            text="outline"
            variation="secondary_outline"
            onClick={() => {
              setScreenProps({ variation: "secondary_outline" });
            }}
          />
          <Button
            text="outline"
            variation="tertiary_outline"
            onClick={() => {
              setScreenProps({ variation: "tertiary_outline" });
            }}
          />
        </Block>
      </StorySection>

      <StorySection leftText="Loading">
        <Block
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button text="Loading" {...screenProps} loading />
          <Button {...screenProps} loading />
          <Button text="Loading" {...screenProps} loading />
        </Block>
      </StorySection>
      <StorySection leftText="Disabled" rightText="Solid MD">
        <Block
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button text="I am a Disabled Button" {...screenProps} disabled />
        </Block>
      </StorySection>
      <StorySection leftText="Sizes" rightText="Solid MD">
        <Block
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          <Button
            text="XS"
            {...screenProps}
            size="xs"
            onClick={() => {
              setScreenProps({ ...screenProps, size: "xs" });
            }}
          />
          <Button
            text="SM"
            {...screenProps}
            size="sm"
            onClick={() => {
              setScreenProps({ ...screenProps, size: "sm" });
            }}
          />
          <Button
            text="MD"
            {...screenProps}
            size="md"
            onClick={() => {
              setScreenProps({ ...screenProps, size: "md" });
            }}
          />
          <Button
            text="LG"
            {...screenProps}
            size="lg"
            onClick={() => {
              setScreenProps({ ...screenProps, size: "lg" });
            }}
          />
          <Button
            text="XL"
            {...screenProps}
            size="xl"
            onClick={() => {
              setScreenProps({ ...screenProps, size: "xl" });
            }}
          />
          <Button
            text="XXL"
            {...screenProps}
            size="xxl"
            onClick={() => {
              setScreenProps({ ...screenProps, size: "xxl" });
            }}
          />
        </Block>
      </StorySection>
      <StorySection leftText="Slots & Labels" rightText="Primary Solid MD">
        <Block
          style={{
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <Button leftIcon="ChevronLeft" {...screenProps} />
          <Button text="Start" {...screenProps} />
          <Button
            leftIcon="ChevronLeft"
            rightIcon="ChevronRight"
            text="Start End"
            {...screenProps}
          />
          <Button text="End" rightIcon="ChevronRight" {...screenProps} />
        </Block>
      </StorySection>
    </StoryView>
  );
};

export default ButtonExample;
