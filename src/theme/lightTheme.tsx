import { Colors } from "./colors";
import buttonTheme from "./light/button-theme";
import labelTheme from "./light/label-theme";
import checkboxTheme from "./light/checkbox-theme";
import radioTheme from "./light/radio-theme";
import radioGroupTheme from "./light/radioGroup-theme";
import badgeTheme from "./light/badge-theme";
import switchTheme from "./light/switch-theme";
import avatarTheme from "./light/avatar-theme";
import imageTheme from "./light/image-theme";
import linkTheme from "./light/link-theme";
import accordionHeaderTheme from "./light/accordion-theme";
import popupTheme from "./light/popup-theme";
import selectTheme from "./light/select-theme";
import textfieldTheme from "./light/textfield-theme";
import datepickerStory from "./light/datepicker-theme";
import stepperTheme from "./light/stepper-theme";
import sliderTheme from "./light/slider-theme";
import { Spacings, Radius, FontSizes } from "./spacings";

export const layeredComponents = ["tab"];

export const lightTheme = {
  root: {
    colors: Colors,
    spacings: Spacings,
  },
  ...buttonTheme,
  ...labelTheme,
  ...checkboxTheme,
  ...radioTheme,
  ...radioGroupTheme,
  ...badgeTheme,
  ...switchTheme,
  ...avatarTheme,
  ...imageTheme,
  ...linkTheme,
  ...accordionHeaderTheme,
  ...popupTheme,
  ...selectTheme,
  ...textfieldTheme,
  ...datepickerStory,
  ...stepperTheme,
  ...sliderTheme,
  // ? TAB Component [Layered Component]
  tab: {
    header: {
      container: {
        variants: {},
      },
    },
    view: {
      container: {
        backgroundColor: Colors.Shades.white,
        borderRadius: Radius.SM,
      },
      element: {
        padding: Spacings.MD,
      },
    },
    headerItem: {
      container: {
        paddingTop: Spacings.SM,
        paddingBottom: Spacings.SM,
        paddingLeft: Spacings.MD,
        paddingRight: Spacings.MD,
        variants: {
          active: {
            true: {
              borderBottomColor: Colors.Primary[500],
            },
          },
        },
      },
      text: {
        fontSize: FontSizes.MD,
        color: Colors.Gray[950],
      },
    },
  },

  block: {},
  col: {},
  row: {},
  list: {},
};
