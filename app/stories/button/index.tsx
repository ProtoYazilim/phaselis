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
          }}
        >
          <Button
            text="Primary"
            primary
            onClick={() => {
              setScreenProps({ primary: true });
            }}
          />
          <Button
            text="Secondary"
            secondary
            onClick={() => {
              setScreenProps({ secondary: true });
            }}
          />
          <Button
            text="Tertiary"
            tertiary
            onClick={() => {
              setScreenProps({ tertiary: true });
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
          <Button text="Loading" {...screenProps} outline loading />
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
          <Button text="Primary outline Disabled" {...screenProps} disabled />
          <Button text="Primary Disabled" {...screenProps} disabled />
        </Block>
      </StorySection>
      <StorySection leftText="Sizes" rightText="Solid MD">
        <Block
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
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
      <StorySection leftText="Solid & Outline" rightText="Primary Solid MD">
        <Block
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button text="Solid" {...screenProps} />
          <Button text="Outline" {...screenProps} outline />
        </Block>
      </StorySection>
    </StoryView>
  );
};

export default ButtonExample;
