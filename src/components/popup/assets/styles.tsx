import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  //@ts-ignore
  container: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    height: "100%",
    zIndex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    variants: {
      size: {
        xs: {},
        sm: {},
        md: {},
        lg: {},
        xl: {},
        xxl: {},
      },
      type: {
        info: {
          backgroundColor: "#D8EEFF",
        },
        success: {
          backgroundColor: "#CEFDE8",
        },
        warning: {
          backgroundColor: "#FFFBC5",
        },
        error: {
          backgroundColor: "#FEE6E5",
        },
      },
    },
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  element: {
    flex: 1,
    variants: {
      primary: {},
      secondary: {},
      tertiary: {},
      outline: {},
      disabled: {},
      loading: {},
      size: {},
    },
  },
  title: {
    variants: {
      primary: {},
      secondary: {},
      tertiary: {},
      outline: {},
      disabled: {},
      loading: {},
    },
  },
  leftSlot: {
    variants: {
      primary: {},
      secondary: {},
      tertiary: {},
      outline: {},
      disabled: {},
      loading: {},
    },
  },
  closeIcon: {
    variants: {
      primary: {},
      secondary: {},
      tertiary: {},
      outline: {},
      disabled: {},
      loading: {},
    },
  },
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
