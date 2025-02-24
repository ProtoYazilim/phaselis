import { DarkColors } from "./DarkColors";
import { Spacings } from "./spacings";
import buttonTheme from "./dark/button-theme";
import labelTheme from "./dark/label-theme";
import checkboxTheme from "./dark/checkbox-theme";
import radioTheme from "./dark/radio-theme";
import radioGroupTheme from "./dark/radioGroup-theme";
import badgeTheme from "./dark/badge-theme";
import switchTheme from "./dark/switch-theme";
import avatarTheme from "./dark/avatar-theme";
import imageTheme from "./dark/image-theme";
import linkTheme from "./dark/link-theme";
import accordionHeaderTheme from "./dark/accordion-theme";
import popupTheme from "./dark/popup-theme";
import selectTheme from "./dark/select-theme";
import textfieldTheme from "./dark/textfield-theme";
import datepickerStory from "./dark/datepicker-theme";
import stepperTheme from "./dark/stepper-theme";
import sliderTheme from "./dark/slider-theme";
import tabViewTheme from "./dark/tabView-theme";
import blockTheme from "./dark/block-theme";
import colTheme from "./dark/col-theme";
import rowTheme from "./dark/row-theme";
import listTheme from "./dark/list-theme";
import inputGroupTheme from "./dark/inputGroup-theme";
import { Shadows } from "./effects";

export const darkTheme = {
  config: {
    name: "dark",
  },
  root: {
    colors: DarkColors,
    spacings: Spacings,
    shadows: Shadows,
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
  ...tabViewTheme,
  ...blockTheme,
  ...colTheme,
  ...rowTheme,
  ...listTheme,
  ...inputGroupTheme,
};
