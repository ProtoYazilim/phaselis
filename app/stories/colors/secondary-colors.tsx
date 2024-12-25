import { Colors } from "phaselis";
import { ColorView } from "appSrc";

const ColorPalette = Object.entries(Colors.Secondary);

const PrimaryColorView = () => {
  return <ColorView ColorArr={ColorPalette} />;
};

export default PrimaryColorView;
