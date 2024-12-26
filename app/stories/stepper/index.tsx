import React from "react";
import { View } from "react-native";
import { Block, Button, Row, Stepper, ProgressStep } from "phaselis";

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

  return (
    <View style={{ margin: 10, backgroundColor: "white" }}>
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
                  text="previus"
                  size="sm"
                  disabled={previousButtonProps.disabled}
                  onClick={() => {
                    previousButtonProps.onPress?.();
                    console.log("clicked previous");
                  }}
                />
              ) : (
                <Block />
              )}
              <Button
                text="next"
                size="sm"
                disabled={nextButtonProps.disabled}
                onClick={() => {
                  nextButtonProps.onPress?.();
                  console.log("clicked next");
                }}
              />
            </Row>
          );
        }}
      >
        <ProgressStep text="Step1" onNext={onNextStep} onPrevious={onPrevStep}>
          <Button text="Step 1" disabled variation="secondary_outline" />
        </ProgressStep>
        <ProgressStep text="Step2" onNext={onNextStep} onPrevious={onPrevStep}>
          <Button text="Step 2" disabled variation="secondary_outline" />
        </ProgressStep>
        <ProgressStep text="Step3" onNext={onNextStep} onPrevious={onPrevStep}>
          <Button text="Step 3" disabled variation="secondary_outline" />
        </ProgressStep>
        <ProgressStep
          text="Step 4"
          onPrevious={onPrevStep}
          onSubmit={onSubmitSteps}
        >
          <Button text="Step 4" variation="secondary_outline" disabled />
        </ProgressStep>
        <ProgressStep
          text="Step5"
          onPrevious={onPrevStep}
          onSubmit={onSubmitSteps}
          disabled
        >
          <Button text="Step 5" variation="secondary_outline" disabled />
        </ProgressStep>
      </Stepper>
    </View>
  );
};

export default StepperStory;
