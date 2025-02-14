import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  //@ts-ignore
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  leftSlot: {},
  closeIcon: {},
  element: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {},
  backDrop: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default stylesheet;
