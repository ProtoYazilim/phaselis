import { Asset } from "expo-asset";

const git_logo_image = Asset.fromModule(require("./git_logo.png"));
const react_background_image = Asset.fromModule(
  require("./react_background.png"),
);
const avatar_image = Asset.fromModule(require("./avatar_image.png"));
const phaselis_avatar_image = Asset.fromModule(
  require("./phaselis_avatar.png"),
);
const phaselis_wood_image = Asset.fromModule(require("./phaselis_wood.png"));
const phaselis_logo_image = Asset.fromModule(require("./phaselis_logo.png"));

export {
  git_logo_image,
  react_background_image,
  avatar_image,
  phaselis_avatar_image,
  phaselis_wood_image,
  phaselis_logo_image,
};
