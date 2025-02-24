import type { FC, ReactNode } from "react";
import { Spacings } from "phaselis";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

const StoryView: FC<{
  children: ReactNode;
  style?: any;
}> = ({ children, style }) => {
  return (
    <KeyboardAwareScrollView
      extraKeyboardSpace={10}
      bottomOffset={20}
      contentContainerStyle={{
        gap: Spacings.XL,
        paddingVertical: 24,
        paddingHorizontal: 16,
        ...style,
      }}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

export default StoryView;
