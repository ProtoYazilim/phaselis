import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { dts } from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";

const packageJson = require("./package.json");

const config = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.module,
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        declaration: true,
        declarationDir: "dist",
      }),
      babel({
        exclude: "node_modules/**",
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        babelHelpers: "runtime",
        presets: [
          ["@babel/preset-env", { loose: true }],
          ["@babel/preset-react", { loose: true, runtime: "automatic" }],
          ["@babel/preset-typescript", { loose: true }],
        ],
        plugins: ["@babel/plugin-transform-runtime"],
      }),
    ],
    external: [
      "react",
      "react-native",
      /^react-native-.*/,
      /^@react-native-.*/,
      "lodash",
      "hoist-non-react-statics",
      // Expo ile ilgili bağımlılıkları harici olarak işaretleyin
      "expo",
      "expo-router",
      /^@expo-.*/,
      "app/**",
      "@babel/runtime",
      "date-fns",
    ],
  },
  {
    input: [
      "dist/components/index.d.ts",
      "dist/hooks/index.d.ts",
      "dist/utils/index.d.ts",
      "dist/types/index.d.ts",
      "dist/theme/index.d.ts",
    ],
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/, /\.png$/, /\.jpg$/, /\.gif$/],
  },
];

export default config;
