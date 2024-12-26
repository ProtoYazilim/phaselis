import { AppleIcon } from "lucide-react-native";
import { CheckboxProps } from "../checkbox/types";

type CheckboxPresets = "";

const checkboxPresetList = new Map<string, CheckboxProps>([]);

// Default
checkboxPresetList.set("", {
  //@ts-ignore
  iconComponent: ({ size, style, checked }: any) => {
    if (checked) {
      return <AppleIcon size={size} style={style} />;
    }
    return null;
  },
});

export type { CheckboxPresets };
export { checkboxPresetList };
