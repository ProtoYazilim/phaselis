import { Colors } from "phaselis";
import { ColorView } from "appSrc";

const ColorPalette = Object.entries(Colors.Tertiary);

const PrimaryColorView = () => {
  return <ColorView ColorArr={ColorPalette} />;
};

export default PrimaryColorView;
