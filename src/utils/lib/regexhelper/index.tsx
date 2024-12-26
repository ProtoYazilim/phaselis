import { isNumber } from "lodash";

export const getRegex = (regexp: string | RegExp) => {
  if (!regexp) return getUnnecessaryRegexp();
  if (isNumber(regexp)) {
    switch (regexp) {
      case RegexpTypes.Numeric:
        return getNumericRegexp();
      case RegexpTypes.AlphaNumeric:
        return getAlphaNumericRegexp();
      case RegexpTypes.Version:
        return getVersionRegexp();
      default:
        return getUnnecessaryRegexp();
    }
  } else if (regexp instanceof RegExp) return regexp;
  else {
    try {
      return new RegExp(regexp);
    } catch (error) {
      console.log("Error in regex", error);
      return getUnnecessaryRegexp();
    }
  }
};

const getUnnecessaryRegexp = () => {
  return new RegExp("");
};

const getNumericRegexp = () => {
  return new RegExp("^\\d+$");
};

const getAlphaNumericRegexp = () => {
  return new RegExp("/^[a-z0-9]+$/i");
};

const getVersionRegexp = () => {
  return new RegExp("[0-9.]+$");
};

export const validateText = (text: string, regex: any) => {
  if (!regex || !(regex instanceof RegExp)) return false;
  return regex.test(text);
};

export const replaceText = (text: string, regex: any) => {
  if (!regex || !(regex instanceof RegExp)) return text;
  let tempReg = text.replace(regex, "");
  return text.replace(tempReg, "");
};

export const RegexpTypes = {
  Numeric: 1,
  AlphaNumeric: 2,
  Version: 3,
};
