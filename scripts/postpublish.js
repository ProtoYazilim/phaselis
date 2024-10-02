/* eslint-disable no-undef */
const fs = require("fs");
const path = require("path");

const packageJsonPath = path.join(__dirname, "../package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

packageJson.main = "expo-router/entry";

const depsToMove = ["react-native", "react", "react-dom"];
packageJson.dependencies = packageJson.dependencies || {};

depsToMove.forEach((dep) => {
  if (packageJson.peerDependencies && packageJson.peerDependencies[dep]) {
    packageJson.dependencies[dep] = packageJson.peerDependencies[dep].replace(
      /^>=/,
      "",
    ); // >= ifadesini kaldır
    delete packageJson.peerDependencies[dep];
  }
});

if (Object.keys(packageJson.peerDependencies || {}).length === 0) {
  delete packageJson.peerDependencies;
}

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log("Reverted the changes done within prepublish.");
