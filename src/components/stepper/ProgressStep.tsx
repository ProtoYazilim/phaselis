import React from "react";
import { View, ScrollView } from "react-native";
import { ProgressStepProps } from "./types";

const ProgressStep: React.FC<ProgressStepProps> = ({
  onNext,
  onPrevious,
  onSubmit,
  setActiveStep,

  nextButtonText = "Next",
  nextButtonDisabled = false,
  nextButtonStyle,
  nextButtonTextStyle,

  previousButtonText = "Previous",
  previousButtonDisabled = false,
  previousButtonStyle,
  previousButtonTextStyle,

  finishButtonText = "Previous",
  finishButtonDisabled = false,
  finishButtonStyle,
  finishButtonTextStyle,

  stepCount,
  scrollViewProps,
  viewProps,
  errors = false,
  scrollable = true,
  children,
  activeStep,
  renderFooter,
}: ProgressStepProps) => {
  const onNextStep = async () => {
    onNext && (await onNext());
    if (errors) {
      return;
    }
    setActiveStep?.((prevStep: any) => prevStep + 1);
  };

  const onPreviousStep = () => {
    onPrevious && onPrevious();
    setActiveStep?.((prevStep: any) => prevStep - 1);
  };

  const onSubmitHandler = () => {
    onSubmit && onSubmit();
  };

  const renderButtons = () => {
    return renderFooter?.({
      stepperState: {
        activeStepIndex: activeStep,
        stepCount: stepCount,
      },
      nextButtonProps: {
        text: nextButtonText,
        disabled: nextButtonDisabled,
        style: nextButtonStyle,
        textStyle: nextButtonTextStyle,
        onPress: activeStep === stepCount! - 1 ? onSubmitHandler : onNextStep,
      },
      previousButtonProps: {
        text: previousButtonText, 
        disabled: previousButtonDisabled,
        style: previousButtonStyle,
        textStyle: previousButtonTextStyle,
        onPress: onPreviousStep,
      },
      finishButtonProps: {
        text: finishButtonText,
        disabled: finishButtonDisabled,
        style: finishButtonStyle,
        textStyle: finishButtonTextStyle,
        onPress: onSubmitHandler,
      },
    });
  };

  return (
    <View>
      {scrollable ? (
        <ScrollView {...scrollViewProps}>{children}</ScrollView>
      ) : (
        <View {...viewProps}>{children}</View>
      )}
      {renderButtons()}
    </View>
  );
};

export default ProgressStep;
