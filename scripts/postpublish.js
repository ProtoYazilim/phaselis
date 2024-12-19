/* eslint-disable no-undef */
const fs = require("fs");
const path = require("path");
console.log("POST PUBLISH STARTED");

const packageJsonPath = path.join(__dirname, "../package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

packageJson.main = "expo-router/entry";

const depsToMove = [
  "react-native-safe-area-context",
  "react-native-screens",
  "react-native-reanimated",
  "@react-native-async-storage/async-storage",
  "@react-navigation/drawer",
  "@react-navigation/native",
  "expo",
  "expo-status-bar",
];

packageJson.dependencies = packageJson.dependencies || {};

depsToMove.forEach((dep) => {
  if (packageJson.tempDependencies && packageJson.tempDependencies[dep]) {
    packageJson.dependencies[dep] = packageJson.tempDependencies[dep];
    delete packageJson.tempDependencies[dep];
  }
});

packageJson.peerDependencies = packageJson.peerDependencies || {};
packageJson.tempPeerDependencies = packageJson.tempPeerDependencies || {};

Object.keys(packageJson.tempPeerDependencies).forEach((dep) => {
  packageJson.peerDependencies[dep] = packageJson.tempPeerDependencies[dep];
  delete packageJson.tempPeerDependencies[dep];
});

if (Object.keys(packageJson.peerDependencies || {}).length === 0) {
  delete packageJson.peerDependencies;
}

if (Object.keys(packageJson.tempPeerDependencies || {}).length === 0) {
  delete packageJson.tempPeerDependencies;
}

if (Object.keys(packageJson.tempDependencies || {}).length === 0) {
  delete packageJson.tempDependencies;
}

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log("Reverted the changes done within prepublish.");
