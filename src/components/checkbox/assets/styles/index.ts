import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 5,
    marginRight: 10,
    variants: {
      disabled: {
        true: {},
      },
      focus: {
        true: {
          borderColor: "blue",
        },
      },
      error: {
        true: {
          borderColor: "red",
        },
      },
      size: {
        xs: {
          height: 10,
        },
        sm: {
          height: 20,
        },
        md: {
          height: 30,
        },
        lg: {
          height: 40,
        },
        xl: {
          height: 45,
        },
        xxl: {
          height: 50,
        },
      },
    },
  },
  icon: {
    height: 24,
    width: 24,
  },
  element: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 8,
    width: 32,
    height: 32,
  },
  text: {
    variants: {
      error: {},
      disabled: {},
      focus: {
        true: {},
      },
    },
  },
});

export default stylesheet;
