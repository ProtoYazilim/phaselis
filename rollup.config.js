import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { dts } from "rollup-plugin-dts";
import babel from "@rollup/plugin-babel";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
      commonjs({
        include: /node_modules/,
        requireReturnsDefault: "auto",
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      babel({
        babelHelpers: "runtime",
        presets: [
          ["@babel/preset-env", { loose: true }],
          ["@babel/preset-react", { loose: true, runtime: "automatic" }],
          ["@babel/preset-typescript", { loose: true }],
        ],
        plugins: ["@babel/plugin-transform-runtime"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        exclude: "node_modules/**",
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
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
    external: [/\.css$/, /\.png$/, /\.jpg$/, /\.gif$/],
  },
];
