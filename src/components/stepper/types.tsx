import type { ReactNode } from "react";
import type { TextStyle, ViewStyle } from "react-native";
import type { IconStyle, SlotIconName } from "../../types";

interface StepHeaderProps extends StepperExtraProps {
  stepCount: number;
  stepNum: number;
  isFirst: boolean;
  isLast: boolean;
  text?: string;
  leftText?: string;
  rightText?: string;
  topText?: string;
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
    completeIcon?: IconStyle;
    number?: ViewStyle;
    text?: TextStyle;
  };
  containerStyle?: ViewStyle;
  leftTrailStyle?: ViewStyle;
  rightTrailStyle?: ViewStyle;
  completeIconStyle?: IconStyle;
  numberStyle?: ViewStyle;
  textStyle?: TextStyle;
  contextValue?: any;
  stepIcon?: SlotIconName;
  completeIcon?: SlotIconName;
  activeIcon?: SlotIconName;
}

interface ProgressStepProps {
  text?: string;
  leftText?: string;
  rightText?: string;
  topText?: string;
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
  children: ReactNode[] | ReactNode;
  stepIcon?: SlotIconName;
  completeIcon?: SlotIconName;
  activeIcon?: SlotIconName;
  firstTrailShown?: boolean;
  lastTrailShown?: boolean;

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

export type { StepHeaderProps, ProgressStepProps, ProgressStepsProps };
