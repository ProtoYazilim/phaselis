import React from "react";
import { View } from "react-native";
import { Block, Button, Row } from "@phaselis/components";
import Stepper from "@phaselis/components/stepper/Stepper";
import ProgressStep from "@phaselis/components/stepper/ProgressStep";

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
                    previousButtonProps.onPress();
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
                  nextButtonProps.onPress();
                  console.log("clicked next");
                }}
              />
            </Row>
          );
        }}
      >
        <ProgressStep text="Step1" onNext={onNextStep} onPrevious={onPrevStep}>
          <Button text="Step 1" disabled secondary outline />
        </ProgressStep>
        <ProgressStep text="Step2" onNext={onNextStep} onPrevious={onPrevStep}>
          <Button text="Step 2" disabled secondary outline />
        </ProgressStep>
        <ProgressStep text="Step3" onNext={onNextStep} onPrevious={onPrevStep}>
          <Button text="Step 3" disabled secondary outline />
        </ProgressStep>
        <ProgressStep
          text="Step 4"
          onPrevious={onPrevStep}
          onSubmit={onSubmitSteps}
        >
          <Button text="Step 4" disabled secondary outline />
        </ProgressStep>
        <ProgressStep
          text="Step5"
          onPrevious={onPrevStep}
          onSubmit={onSubmitSteps}
          disabled
        >
          <Button text="Step 5" disabled secondary outline />
        </ProgressStep>
      </Stepper>
    </View>
  );
};

export default StepperStory;
