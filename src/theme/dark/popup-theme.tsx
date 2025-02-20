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
        color: Colors.Gray[950],
        fontWeight: 700,
        lineHeight: 20,
      },
      backDrop: {},
    },
    info: {
      container: {
        backgroundColor: Colors.Info[100],
      },
    },
    success: {
      container: {
        backgroundColor: Colors.Success[100],
      },
    },
    warning: {
      container: {
        backgroundColor: Colors.Warning[100],
      },
    },
    error: {
      container: {
        backgroundColor: Colors.Danger[100],
      },
    },
  },
};
