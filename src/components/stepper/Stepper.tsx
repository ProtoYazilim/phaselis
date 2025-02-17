import type { ProgressStepsProps } from "./types";
import type { FC } from "react";
import { useState, useEffect, useMemo, Children, cloneElement } from "react";
import { View } from "react-native";
import StepHeader from "./StepHeader";
import times from "lodash/times";

const ProgressSteps: FC<ProgressStepsProps> = ({
  isComplete = false,
  activeStep = 0,
  children,
  renderFooter,
  completeIcon,
  stepIcon,
  activeIcon,
  firstTrailShown = false,
  lastTrailShown = false,
}: ProgressStepsProps) => {
  const [stepCount, setStepCount] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(activeStep);

  const [stepPositions, setStepPositions] = useState<
    { x: number; y: number }[]
  >([]);

  const childrenArray = Children.toArray(children);

  useEffect(() => {
    setStepCount(Children.count(children));
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
            (childrenArray[i] as React.ReactElement<{ text: string }>).props
              .text
          }
          leftText={
            (childrenArray[i] as React.ReactElement<{ leftText: string }>).props
              .leftText
          }
          rightText={
            (childrenArray[i] as React.ReactElement<{ rightText: string }>)
              .props.rightText
          }
          topText={
            (childrenArray[i] as React.ReactElement<{ topText: string }>).props
              .topText
          }
          isFirst={!firstTrailShown && i === 0}
          isLast={i === stepCount - 1 && !lastTrailShown}
          isCompleted={isCompletedStep}
          isActive={isActiveStep}
          active={activeStep}
          stepPositions={stepPositions}
          setStepPositions={(newArr) => {
            setStepPositions([...newArr]);
          }}
          stepCount={stepCount}
          isDisabled={
            (childrenArray[i] as React.ReactElement<{ disabled: boolean }>)
              .props.disabled
          }
          completeIcon={completeIcon}
          stepIcon={stepIcon}
          activeIcon={activeIcon}
        />
      );
    });
  };

  const disabledStepsIndexes = useMemo(() => {
    return Children.map(children, (child, index) => {
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
        {cloneElement(childrenArray[currentStep] as React.ReactElement, {
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
