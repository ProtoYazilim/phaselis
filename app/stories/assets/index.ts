import { Asset } from "expo-asset";
const proto_header_image = Asset.fromModule(require("./proto_header.jpeg"));
const git_logo_image = Asset.fromModule(require("./git_logo.png"));
const react_background_image = Asset.fromModule(
  require("./react_background.png"),
);
export { proto_header_image, git_logo_image, react_background_image };
