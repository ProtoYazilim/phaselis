import React from "react";
import { View, ScrollView } from "react-native";
import { ProgressStepProps } from "./types";

const ProgressStep: React.FC<ProgressStepProps> = ({
  onNext,
  onPrevious,
  onSubmit,
  setActiveStep,

  nextButtonDisabled = false,

  previousButtonDisabled = false,

  finishButtonDisabled = false,

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
        disabled: nextButtonDisabled,

        onPress: activeStep === stepCount! - 1 ? onSubmitHandler : onNextStep,
      },
      previousButtonProps: {
        disabled: previousButtonDisabled,

        onPress: onPreviousStep,
      },
      finishButtonProps: {
        disabled: finishButtonDisabled,

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
