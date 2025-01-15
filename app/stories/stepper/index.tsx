import React, { FC } from "react";
import { Text } from "react-native";
import { Block, Button, Row, Stepper, ProgressStep, Colors } from "phaselis";
import StoryView from "appSrc/StoryView";
import StorySection from "appSrc/StorySection";

const StepperStory = () => {
  const onNextStep = () => {
    console.log("called next step");
  };

  const onPrevStep = () => {
    console.log("called previous step");
  };

  const onSubmitSteps = () => {
    console.log("called on submit step.");
  };

  const SpecialBlock: FC<{
    text: string;
  }> = ({ text }) => {
    return (
      <Block
        style={{
          borderRadius: 8,
          paddingVertical: 64,
          borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
          borderColor: Colors.Primary[200],
        }}
      >
        <Text>{text}</Text>
      </Block>
    );
  };

  return (
    <StoryView>
      <StorySection leftText="Usage">
        <Stepper
          renderFooter={({
            nextButtonProps,
            previousButtonProps,
            stepperState,
          }) => {
            return (
              <Row style={{ justifyContent: "space-between", marginTop: 10 }}>
                {stepperState?.activeStepIndex !== 0 ? (
                  <Button
                    text="Previous"
                    size="sm"
                    leftIcon="ChevronLeft"
                    disabled={previousButtonProps.disabled}
                    onClick={() => {
                      previousButtonProps.onPress?.();
                    }}
                  />
                ) : (
                  <Block />
                )}
                <Button
                  text="Next"
                  size="sm"
                  rightIcon="ChevronRight"
                  disabled={nextButtonProps.disabled}
                  onClick={() => {
                    nextButtonProps.onPress?.();
                  }}
                />
              </Row>
            );
          }}
        >
          <ProgressStep
            text="Step1"
            onNext={onNextStep}
            onPrevious={onPrevStep}
          >
            <SpecialBlock text="Content 1" />
          </ProgressStep>
          <ProgressStep
            text="Step2"
            onNext={onNextStep}
            onPrevious={onPrevStep}
          >
            <SpecialBlock text="Content 2" />
          </ProgressStep>
          <ProgressStep
            text="Step3"
            onNext={onNextStep}
            onPrevious={onPrevStep}
          >
            <SpecialBlock text="Content 3" />
          </ProgressStep>
          <ProgressStep
            text="Step 4"
            onPrevious={onPrevStep}
            onSubmit={onSubmitSteps}
          >
            <SpecialBlock text="Content 4" />
          </ProgressStep>
          <ProgressStep
            text="Step5"
            onPrevious={onPrevStep}
            onSubmit={onSubmitSteps}
          >
            <SpecialBlock text="Content 5" />
          </ProgressStep>
        </Stepper>
      </StorySection>
      <StorySection leftText="States">
        <Stepper activeStep={1} lastTrailShown>
          <ProgressStep text="Completed" />
          <ProgressStep text="Active" />
          <ProgressStep text="Default" />
          <ProgressStep text="Disabled" disabled />
        </Stepper>
      </StorySection>
      <StorySection leftText="Icon">
        <Stepper
          activeStep={0}
          stepIcon={"Star"}
          activeIcon={"Apple"}
          firstTrailShown
          lastTrailShown
        >
          <ProgressStep text="Active" />
          <ProgressStep text="Default" />
          <ProgressStep text="Disabled" disabled />
        </Stepper>
      </StorySection>
      <StorySection leftText="Labels">
        <Stepper activeStep={0} firstTrailShown lastTrailShown>
          <ProgressStep
            text="Bottom"
            rightText="Right"
            leftText="Left"
            topText="Top"
          />
        </Stepper>
      </StorySection>
    </StoryView>
  );
};

export default StepperStory;
