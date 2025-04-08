import type { ThemeComponentSize } from "./types";

type SpacingsType = {
  [key in Uppercase<ThemeComponentSize>]: number;
};

const Spacings: SpacingsType = {
  XS: 4,
  SM: 8,
  MD: 16,
  LG: 32,
  XL: 64,
  XXL: 128,
};

const Heights = {
  XSminHeight: 24,
  SMminHeight: 32,
  MDminHeight: 40,
  LGminHeight: 56,
  XLminHeight: 64,
  XXLminHeight: 96,
};

const Radius = {
  XS: 2,
  SM: 4,
  MD: 8,
  LG: 12,
  XL: 16,
  XXL: 32,
};

const FontSizes = {
  XS: 12,
  SM: 14,
  MD: 16,
  LG: 18,
  XL: 22,
  XXL: 26,
};

const IconSizes = {
  XS: 8,
  SM: 12,
  MD: 16,
  LG: 24,
  XL: 32,
  XXL: 64,
};

export { Spacings, Heights, Radius, FontSizes, IconSizes };
