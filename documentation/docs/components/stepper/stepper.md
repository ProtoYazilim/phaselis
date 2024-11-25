---
id: stepper
category: "data-display"
title: Stepper
version: "0.1"
description: The Stepper component provides a structure for multi-step processes, managing the display and navigation of each step.
---

# Stepper

The `Stepper` component is designed to guide users through a series of steps in a controlled process. It renders a step header to show progress and allows customization of footer controls for navigation.

## Import

```jsx
import { Stepper } from "phaselis";
```

## Usage

```jsx
<Stepper
  renderFooter={({ nextButtonProps, previousButtonProps, stepperState }) => (
    <Row style={{ justifyContent: "space-between", marginTop: 10 }}>
      {stepperState?.activeStepIndex !== 0 && (
        <Button
          text="Previous"
          size="sm"
          disabled={previousButtonProps.disabled}
          onClick={previousButtonProps.onPress}
        />
      )}
      <Button
        text="Next"
        size="sm"
        disabled={nextButtonProps.disabled}
        onClick={nextButtonProps.onPress}
      />
    </Row>
  )}
>
  <ProgressStep text="Step 1">
    <Text>Content for Step 1</Text>
  </ProgressStep>
  <ProgressStep text="Step 2" previousButtonDisabled>
    <Text>Content for Step 2</Text>
  </ProgressStep>
  <ProgressStep text="Step 3">
    <Text>Content for Step 3</Text>
  </ProgressStep>
</Stepper>
```

## Props

### isComplete

`boolean`

Indicates if the process is complete. When set to `true`, it marks all steps as completed.

```jsx
<Stepper isComplete />
```

### activeStep

`number`

The current active step index. Defaults to `0`.

```jsx
<Stepper activeStep={2} />
```

### children

`React.ReactNode[]`

The steps to display, each represented as a `ProgressStep` component.

```jsx
<Stepper>
  <ProgressStep text="Step 1" />
  <ProgressStep text="Step 2" />
  <ProgressStep text="Step 3" />
</Stepper>
```

### renderFooter

`renderFooter` is a prop that allows for custom rendering of footer navigation elements in the `Stepper` component.

#### Type

```typescript
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
```

#### Parameters

- **`nextButtonProps`**: Contains the properties for the "Next" button.

  - `text`: The text displayed on the button.
  - `disabled`: Boolean indicating if the button should be disabled.
  - `style`: Custom style for the button.
  - `textStyle`: Custom text style for the button.
  - `onPress`: Function triggered when the button is pressed.

- **`finishButtonProps`**: Contains the properties for the "Finish" button (shown on the last step).

  - `text`: The text displayed on the button.
  - `disabled`: Boolean indicating if the button should be disabled.
  - `style`: Custom style for the button.
  - `textStyle`: Custom text style for the button.
  - `onPress`: Function triggered when the button is pressed.

- **`previousButtonProps`**: Contains the properties for the "Previous" button.

  - `text`: The text displayed on the button.
  - `disabled`: Boolean indicating if the button should be disabled.
  - `style`: Custom style for the button.
  - `textStyle`: Custom text style for the button.
  - `onPress`: Function triggered when the button is pressed.

- **`stepperState`**: Provides the current state of the stepper.
  - `activeStepIndex`: The current step index.
  - `stepCount`: The total number of steps in the stepper.

```jsx
<Stepper
  renderFooter={({
    nextButtonProps,
    previousButtonProps,
    finishButtonProps,
    stepperState,
  }) => (
    <Row style={{ justifyContent: "space-between", marginTop: 10 }}>
      {stepperState?.activeStepIndex !== 0 && (
        <Button
          text="Previous"
          size="sm"
          disabled={previousButtonProps.disabled}
          onClick={previousButtonProps.onPress}
        />
      )}
      {stepperState?.activeStepIndex === stepperState?.stepCount - 1 ? (
        <Button
          text="Finish"
          size="sm"
          disabled={finishButtonProps.disabled}
          onClick={finishButtonProps.onPress}
        />
      ) : (
        <Button
          text="Next"
          size="sm"
          disabled={nextButtonProps.disabled}
          onClick={nextButtonProps.onPress}
        />
      )}
    </Row>
  )}
></Stepper>
```
