/* eslint-disable react/display-name */
import { Text } from "react-native";

const hasValue = (value: any) => {
  return !(value === null || value === undefined || value === "");
};

export const required = (message?: string) => {
  return (value: any, props: any) => {
    const REQUIRED_MESSAGE = "Bu alanın girilmesi zorunludur";
    if (
      !hasValue(value) ||
      (props.isCheckable && !props.checked) ||
      (props.isFileUpload &&
        props.validations.length === 1 &&
        value instanceof Array &&
        value.length === 0) ||
      (!props.isFileUpload &&
        typeof value === "object" &&
        (value.value === null ||
          value.value === undefined ||
          value.value === ""))
    ) {
      return <Text>{message || REQUIRED_MESSAGE}</Text>;
    }
  };
};

export const minLength = (length: number, message?: string) => {
  return (value: any) => {
    if (hasValue(value) && value.length < length) {
      const MINLENGTH_MESSAGE = `Bu alan en az ${length} karakter uzunluğunda olmalıdır`;
      return <Text>{message || MINLENGTH_MESSAGE}</Text>;
    }
  };
};

export const maxLength = (length: number, message?: string) => {
  return (value: any) => {
    if (hasValue(value) && value.length > length) {
      const MAXLENGTH_MESSAGE = `Bu alan en fazla ${length} karakter uzunluğunda olmalıdır`;
      return <Text>{message || MAXLENGTH_MESSAGE}</Text>;
    }
  };
};

export const email = (message?: string) => {
  return (value: any) => {
    const EMAIL_MESSAGE = `Bu alan eposta formatında olmalıdır`;
    if (
      hasValue(value) &&
      !/[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9]{2,}(?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/.test(
        value,
      )
    ) {
      return <Text>{message || EMAIL_MESSAGE}</Text>;
    }
  };
};

export const minValue = (val: any, message?: string) => {
  return (value: any) => {
    if (hasValue(value) && parseFloat(value) < val) {
      const MINVALUE_MESSAGE = `Bu alan ${val} değerinden küçük olamaz`;
      return <Text>{message || MINVALUE_MESSAGE}</Text>;
    }
  };
};

export const maxValue = (val: any, message?: string) => {
  return (value: any) => {
    const MAXVALUE_MESSAGE = `Bu alan ${val} değerinden büyük olamaz`;
    if (hasValue(value) && parseFloat(value) > val) {
      return <Text>{message || MAXVALUE_MESSAGE}</Text>;
    }
  };
};

export const numeric = (message?: string) => {
  return (value: any) => {
    const NUMERIC_MESSAGE = `Bu alan numerik formatında olmalıdır`;
    if (hasValue(value) && !/^\d+$/.test(value)) {
      return <Text>{message || NUMERIC_MESSAGE}</Text>;
    }
  };
};

export const version = (message?: string) => {
  return (value: any) => {
    const VERSION_MESSAGE = `Bu alan version (ÖR:0.0.1) formatında olmalıdır`;
    if (hasValue(value) && !/^(\d+\.)?(\d+\.)?(\*|\d+)$/.test(value)) {
      return <Text>{message || VERSION_MESSAGE}</Text>;
    }
  };
};

export const dateFormat = (message: string) => {
  return (value: any) => {
    const DATE_MESSAGE = `Bu alan tarih (ÖR:11.11.2011) formatında olmalıdır`;
    if (
      hasValue(value) &&
      !/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/.test(
        value,
      )
    ) {
      return <Text>{message || DATE_MESSAGE}</Text>;
    }
  };
};

export const timeFormat = (message?: string) => {
  return (value: any, props: any) => {
    const TIME_MESSAGE = `Bu alan saat (ÖR:20:30) formatında olmalıdır`;
    if (hasValue(value)) {
      if (
        (props.getMaskedValue &&
          !/^([0-1][0-9]|[2][0-3]):([0-5][0-9])$/.test(value)) ||
        (!props.getMaskedValue &&
          !/^([0-1][0-9]|[2][0-3])([0-5][0-9])$/.test(value))
      ) {
        return <Text>{message || TIME_MESSAGE}</Text>;
      }
    }
  };
};

export const fileType = (message?: string) => {
  return (value: any) => {
    const FILE_TYPE_MESSAGE = "Lütfen uygun tipte dosya seçiniz";
    if (hasValue(value) && value instanceof Array && value.length === 0) {
      return <Text>{message || FILE_TYPE_MESSAGE}</Text>;
    }
  };
};

export const tcknFormat = (message?: string) => {
  return (value: any) => {
    const TCKN_FORMAT_MESSAGE = "Lütfen uygun tipte dosya seçiniz";
    if (hasValue(value)) {
      value = value.toString();

      let isEleven = /^[0-9]{11}$/.test(value);

      let totalX = 0;
      for (let i = 0; i < 10; i++) {
        totalX += Number(value.substr(i, 1));
      }

      let comparedisRuleX = totalX % 10;
      let comparedisRuleXString = comparedisRuleX.toString();
      let isRuleX = comparedisRuleXString === value.substr(10, 1);

      let totalY1 = 0;
      let totalY2 = 0;
      for (let i = 0; i < 10; i += 2) {
        totalY1 += Number(value.substr(i, 1));
      }
      for (let i = 1; i < 10; i += 2) {
        totalY2 += Number(value.substr(i, 1));
      }

      let comparedisRuleY = (totalY1 * 7 - totalY2) % 10;
      let comparedisRuleYString = comparedisRuleY.toString();
      let isRuleY = comparedisRuleYString === value.substr(9, 0);

      if (!isEleven || !isRuleX || !isRuleY) {
        return <Text>{message || TCKN_FORMAT_MESSAGE}</Text>;
      }
    }
  };
};
