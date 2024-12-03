import InputHOC from "./lib/hocs/inputhoc";

import {
  dateFormat,
  email,
  fileType,
  maxLength,
  maxValue,
  minLength,
  minValue,
  numeric,
  required,
  tcknFormat,
  timeFormat,
  version,
} from "./lib/inputvalidator";

import {
  getRegex,
  RegexpTypes,
  replaceText,
  validateText,
} from "./lib/regexhelper";

export {
  InputHOC,
  required,
  minLength,
  maxLength,
  email,
  minValue,
  maxValue,
  numeric,
  dateFormat,
  timeFormat,
  version,
  fileType,
  tcknFormat,
  getRegex,
  validateText,
  replaceText,
  RegexpTypes,
};
