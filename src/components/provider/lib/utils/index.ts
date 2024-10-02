import { Dimensions } from "react-native";

export function getDeviceSize() {
  let { width } = Dimensions.get("screen");

  if (width < 768) {
    return 1;
  } else if (width < 1024) {
    return 2;
  } else if (width < 1440) {
    return 3;
  } else {
    return 4;
  }
}
