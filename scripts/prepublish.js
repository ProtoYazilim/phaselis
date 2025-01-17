/* eslint-disable no-undef */
const fs = require("fs");
const path = require("path");

const packageJsonPath = path.join(__dirname, "../package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

packageJson.main = "dist/index.js";

// Belirtilen bağımlılıkları dependencies'den kaldırıp peerDependencies'e taşıyalım
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

const peerDependenciesNotToMove = [
  "react",
  "react-dom",
  "react-native",
  "react-test-renderer",
];

packageJson.peerDependencies = packageJson.peerDependencies || {};
packageJson.tempDependencies = packageJson.tempDependencies || {};

depsToMove.forEach((dep) => {
  if (packageJson.dependencies && packageJson.dependencies[dep]) {
    packageJson.tempDependencies[dep] = packageJson.dependencies[dep];
    delete packageJson.dependencies[dep];
  }
});

packageJson.peerDependencies = packageJson.peerDependencies || {};
packageJson.tempPeerDependencies = packageJson.tempPeerDependencies || {};

Object.keys(packageJson.peerDependencies).forEach((dep) => {
  if (peerDependenciesNotToMove.includes(dep)) {
    return;
  }
  packageJson.tempPeerDependencies[dep] = packageJson.peerDependencies[dep];
  delete packageJson.peerDependencies[dep];
});

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('Updated main property to "package/index.js" for prepublish.');
