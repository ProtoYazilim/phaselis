import { BlurView, type BlurViewProps } from "@react-native-community/blur";
import type { FC } from "react";

const BlurBlock: FC<BlurViewProps> = (props) => {
  return <BlurView {...props} />;
};

BlurBlock.displayName = "BlurBlock";

export default BlurBlock;
