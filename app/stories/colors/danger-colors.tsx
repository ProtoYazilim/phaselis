import { Colors } from "@phaselis/theme";
import { ColorView } from "../../../appSrc";

const ColorPalette = Object.entries(Colors.Danger);

const PrimaryColorView = () => {
  return <ColorView ColorArr={ColorPalette} />;
};

export default PrimaryColorView;
