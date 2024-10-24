/* eslint-disable no-undef */
const { rollup } = require("rollup");
const typescript = require("@rollup/plugin-typescript");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const babel = require("@rollup/plugin-babel");
const fs = require("fs");
const path = require("path");
const _ = require("lodash");

const getInputOptions = (componentName) => ({
  input: `components/${componentName}/index.tsx`,
  external: [
    "react",
    "react-native",
    "lucide-react-native",
    "react-native-unistyles",
    "react-native-date-picker",
    "date-fns",
    "expo-router",
    "react-native-picker-select",
    "@react-native-community/slider",
    "lodash",
  ],
  plugins: [
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    commonjs(),
    typescript({
      tsconfig: path.resolve(__dirname, "tsconfig.json"),
      include: [
        `components/${componentName}/**/*.ts+(|x)`,
        `components/${componentName}/**/*.js+(|x)`,
      ],
      exclude: ["node_modules"],
      compilerOptions: {
        emitDeclarationOnly: true,
        strict: false,
        declaration: true,
        declarationMap: true,
        declarationDir: `dist/${componentName}`,
      },
    }),
    babel({
      presets: ["@babel/preset-react"],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      babelHelpers: "runtime",
      exclude: "node_modules/**",
    }),
  ],
});

async function generatePackageJson(componentName, componentPath) {
  const infoFile = fs.readFileSync(
    path.join(componentPath, "info.json"),
    "utf-8",
  );
  const info = JSON.parse(infoFile);
  const identityFile = fs.readFileSync(
    path.join(__dirname, "identity.json"),
    "utf-8",
  );
  const identity = JSON.parse(identityFile);

  const packageJson = _.merge(info, identity);

  fs.writeFileSync(
    path.join("dist", componentName, "package.json"),
    JSON.stringify(packageJson, null, 2),
  );
}

async function build(componentName) {
  let bundle;
  let buildFailed = false;
  const componentPath = path.join("components", componentName);

  try {
    bundle = await rollup({
      ...getInputOptions(componentName),
    });

    console.log(bundle.watchFiles);
    await generateOutputs(bundle, componentName);
    await generatePackageJson(componentName, componentPath);
  } catch (error) {
    buildFailed = true;
    console.error("Build failed:", error);
  } finally {
    if (bundle) {
      await bundle.close();
    }
    process.exit(buildFailed ? 1 : 0);
  }
}

async function generateOutputs(bundle, componentName) {
  console.log(`Generating output for ${componentName}`);
  await bundle.write({
    dir: path.join("dist", componentName),
    format: "es", // You can specify different formats here if needed
  });
}

const componentName = process.argv[2];
if (!componentName) {
  console.error(
    "No component name provided. Usage: node bundler.js <componentName>",
  );
  process.exit(1);
}

build(componentName);
