import { ReactNode } from "react";
import { ViewStyle } from "react-native";

interface StepHeaderProps {
  stepCount: number;
  stepNum: number;
  isFirst: boolean;
  isLast: boolean;
  text?: string;
  isActive?: boolean;
  isCompleted?: boolean;
  stepPositions?: { x: number; y: number }[];
  setStepPositions?: (positions: { x: number; y: number }[]) => void;
  active?: number;
  isDisabled?: boolean;
  style?: {
    container?: ViewStyle;
    element?: ViewStyle;
    leftTrail?: ViewStyle;
    rightTrail?: ViewStyle;
    completeIcon?: ViewStyle;
    number?: ViewStyle;
    text?: ViewStyle;
  };
  contextValue?: any;
}

interface ProgressStepProps {
  text?: string;
  onNext?: () => Promise<void> | void;
  onPrevious?: () => void;
  onSubmit?: () => void;
  setActiveStep?: (step: number | any) => void;
  stepCount?: number;
  scrollViewProps?: object;
  viewProps?: object;
  errors?: boolean;
  scrollable?: boolean;
  children?: ReactNode;
  activeStep?: number;
  disabled?: boolean;

  previousButtonDisabled?: boolean;

  finishButtonDisabled?: boolean;

  nextButtonDisabled?: boolean;

  renderFooter?: (...args: any[]) => any;
}

interface ProgressStepsProps {
  isComplete?: boolean;
  activeStep?: number;
  children: React.ReactNode[];

  renderFooter?: ({
    nextButtonProps,
    finishButtonProps,
    previousButtonProps,
    stepperState,
  }: {
    nextButtonProps: {
      text?: string;
      disabled?: boolean;
      style?: ViewStyle;
      textStyle?: ViewStyle;
      onPress?: () => void;
    };
    finishButtonProps: {
      text?: string;
      disabled?: boolean;
      style?: ViewStyle;
      textStyle?: ViewStyle;
      onPress?: () => void;
    };
    previousButtonProps: {
      text?: string;
      disabled?: boolean;
      style?: ViewStyle;
      textStyle?: ViewStyle;
      onPress?: () => void;
    };
    stepperState: {
      activeStepIndex?: number;
      stepCount: number;
    };
  }) => any;
}

export { StepHeaderProps, ProgressStepProps, ProgressStepsProps };
