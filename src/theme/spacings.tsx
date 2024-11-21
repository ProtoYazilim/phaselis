import { ComponentSize } from "../types";

type SpacingsType = {
  [key in Uppercase<ComponentSize>]: number;
};

const Spacings: SpacingsType = {
  XXS: 2,
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

export { Spacings, Heights, Radius };
