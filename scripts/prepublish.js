/* eslint-disable no-undef */
const fs = require("fs");
const path = require("path");

const packageJsonPath = path.join(__dirname, "../package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));

packageJson.main = "package/index.js";

// Belirtilen bağımlılıkları dependencies'den kaldırıp peerDependencies'e taşıyalım
const depsToMove = ["react-native", "react", "react-dom"];
packageJson.peerDependencies = packageJson.peerDependencies || {};

depsToMove.forEach((dep) => {
  if (packageJson.dependencies && packageJson.dependencies[dep]) {
    // Sürümün önüne ">=" ekleyerek peerDependencies'e taşıyalım
    packageJson.peerDependencies[dep] = ">=" + packageJson.dependencies[dep];
    delete packageJson.dependencies[dep];
  }
});

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('Updated main property to "package/index.js" for prepublish.');
