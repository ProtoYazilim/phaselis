import { Colors } from "../colors";
import { Spacings, FontSizes } from "../spacings";

export default {
  popup: {
    default: {
      container: {
        backgroundColor: Colors.Gray[50],
        padding: Spacings.MD,
        borderRadius: Spacings.MD,
      },
      leftSlot: {
        color: Colors.Gray[950],
        marginRight: Spacings.SM,
      },
      closeIcon: {
        marginBottom: Spacings.MD,
        marginRight: Spacings.MD,
        marginTop: Spacings.MD,
        color: Colors.Gray[950],
      },
      element: {
        padding: Spacings.MD,
      },
      header: {
        marginBottom: Spacings.SM,
      },
      title: {
        fontSize: FontSizes.MD,
        fontWeight: 700,
        lineHeight: 20,
        color: Colors.Gray[950],
      },
    },
    info: {
      container: {
        backgroundColor: "#D8EEFF",
      },
    },
    success: {
      container: {
        backgroundColor: "#CEFDE8",
      },
    },
    warning: {
      container: {
        backgroundColor: "#FFFBC5",
      },
    },
    error: {
      container: {
        backgroundColor: "#FEE6E5",
      },
    },
  },
};
