import type { ThemeComponentSize } from "./types";

type ShadowsType = {
  [key in Uppercase<ThemeComponentSize>]: any;
};

const Shadows: ShadowsType = {
  XS: {
    color: "black",
    opacity: 0.12,
    radius: 4,
    offset: [2, 2],
  },
  SM: {
    color: "black",
    opacity: 0.12,
    radius: 8,
    offset: [4, 4],
  },
  MD: {
    color: "black",
    opacity: 0.16,
    radius: 16,
    offset: [4, 4],
  },
  LG: {
    color: "black",
    opacity: 0.12,
    radius: 16,
    offset: [8, 8],
  },
  XL: {
    color: "black",
    opacity: 0.12,
    radius: 32,
    offset: [16, 16],
  },
  XXL: {
    color: "black",
    opacity: 0.12,
    radius: 64,
    offset: [32, 32],
  },
};

export { Shadows };
