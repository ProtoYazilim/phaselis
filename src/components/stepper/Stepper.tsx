import React, { useState, useEffect, useMemo } from "react";
import { View } from "react-native";
import { times } from "lodash";
import StepHeader from "./StepHeader";
import { ProgressStepsProps } from "./types";

const ProgressSteps: React.FC<ProgressStepsProps> = ({
  isComplete = false,
  activeStep = 0,
  children,
  renderFooter,
}: ProgressStepsProps) => {
  const [stepCount, setStepCount] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(activeStep);

  const [stepPositions, setStepPositions] = useState<
    { x: number; y: number }[]
  >([]);

  useEffect(() => {
    setStepCount(React.Children.count(children));
  }, [children]);

  useEffect(() => {
    setCurrentStep(activeStep);
  }, [activeStep]);

  const renderHeader = () => {
    return times(stepCount, (i) => {
      const isCompletedStep = isComplete ? true : i < currentStep;
      const isActiveStep = isComplete ? false : i === currentStep;
      return (
        <StepHeader
          key={i}
          stepNum={i + 1}
          text={
            (children[i] as React.ReactElement<{ text: string }>).props.text
          }
          isFirst={i === 0}
          isLast={i === stepCount - 1}
          isCompleted={isCompletedStep}
          isActive={isActiveStep}
          active={activeStep}
          stepPositions={stepPositions}
          setStepPositions={(newArr) => {
            setStepPositions([...newArr]);
          }}
          stepCount={stepCount}
          isDisabled={
            (children[i] as React.ReactElement<{ disabled: boolean }>).props
              .disabled
          }
        />
      );
    });
  };

  const disabledStepsIndexes = useMemo(() => {
    return React.Children.map(children, (child, index) => {
      if ((child as React.ReactElement<{ disabled: boolean }>).props.disabled) {
        return index;
      }
    });
  }, [children]);

  const isNextButtonDisabled = useMemo(() => {
    return (
      currentStep === stepCount - 1 ||
      disabledStepsIndexes?.includes(currentStep + 1) ||
      false
    );
  }, [disabledStepsIndexes, currentStep, stepCount]);

  const isPreviousButtonDisabled = useMemo(() => {
    return (
      currentStep === 0 ||
      disabledStepsIndexes?.includes(currentStep - 1) ||
      false
    );
  }, [disabledStepsIndexes, currentStep]);

  const isFinishButtonDisabled = useMemo(
    () => currentStep !== stepCount - 1,
    [currentStep, stepCount],
  );

  return (
    <View>
      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignSelf: "center",
          flexDirection: "row",
          top: 30,
          marginBottom: 50,
        }}
      >
        {renderHeader()}
      </View>
      <View>
        {React.cloneElement(children[currentStep] as React.ReactElement, {
          setActiveStep: setCurrentStep,
          activeStep: currentStep,
          stepCount,
          renderFooter,
          nextButtonDisabled: isNextButtonDisabled,
          previousButtonDisabled: isPreviousButtonDisabled,
          finishButtonDisabled: isFinishButtonDisabled,
        })}
      </View>
    </View>
  );
};

export default ProgressSteps;
