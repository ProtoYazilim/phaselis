import { ReactNode } from "react";

export interface BottomSheetProps {
  show: boolean;
  duration?: number;
  children: ReactNode;
  onClose: () => void;
  fullScreenModal?: boolean;
  maxHeightModal?: number | "auto" | `${number}%`;
}
