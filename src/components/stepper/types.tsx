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
  previousBtnText?: string;
  finishBtnText?: string;
  stepCount?: number;
  previousBtnStyle?: ViewStyle;
  previousBtnTextStyle?: ViewStyle;
  previousBtnDisabled?: boolean;
  scrollViewProps?: object;
  viewProps?: object;
  errors?: boolean;
  removeBtnRow?: boolean;
  scrollable?: boolean;
  children?: ReactNode;
  activeStep?: number;
  disabled?: boolean;

  previousButtonStyle?: ViewStyle;
  previousButtonTextStyle?: ViewStyle;
  previousButtonDisabled?: boolean;
  previousButtonText?: string;

  finishButtonStyle?: ViewStyle;
  finishButtonTextStyle?: ViewStyle;
  finishButtonDisabled?: boolean;
  finishButtonText?: string;

  nextButtonStyle?: ViewStyle;
  nextButtonTextStyle?: ViewStyle;
  nextButtonDisabled?: boolean;
  nextButtonText?: string;

  renderFooter?: ({
    nextButtonProps,
    finishButtonProps,
  }: {
    nextButtonProps?: {
      text?: string;
      disabled?: boolean;
      style?: ViewStyle;
      textStyle?: ViewStyle;
      onPress?: () => void;
    };
    finishButtonProps?: {
      text?: string;
      disabled?: boolean;
      style?: ViewStyle;
      textStyle?: ViewStyle;
      onPress?: () => void;
    };
    previousButtonProps?: {
      text?: string;
      disabled?: boolean;
      style?: ViewStyle;
      textStyle?: ViewStyle;
      onPress?: () => void;
    };
    stepperState?: {
      activeStepIndex?: number;
      stepCount?: number;
    };
  }) => any;
}

interface ProgressStepsProps {
  isComplete?: boolean;
  activeStep?: number;
  topOffset?: number;
  marginBottom?: number;
  children: React.ReactNode[];
  renderFooter?: (...args : any[])=> any;
}

export { StepHeaderProps, ProgressStepProps, ProgressStepsProps };
