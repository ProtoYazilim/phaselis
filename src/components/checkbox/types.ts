import {
  IBaseFormStyleType,
  IBaseStyleType,
  ICheckableEventType,
  IFormPropTypes,
  IGenericStyleType,
} from "@phaselis/types";
import { ChangeEvent, MouseEvent, FocusEvent, ReactNode } from "react";

export interface IBaseCheckboxStyleType
  extends IBaseFormStyleType,
    IBaseStyleType {
  element?: IGenericStyleType;
  icon?: IGenericStyleType;
}

export interface CheckboxProps extends IFormPropTypes {
  text?: string;
  checked?: boolean;
  style?: IBaseCheckboxStyleType;
  checkedSvg?: any;
  unCheckedSvg?: any;
  autoFocus?: boolean;
  onChange?: (
    e: ChangeEvent<HTMLInputElement> | ICheckableEventType,
    value: boolean,
  ) => any;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onMouseOut?: (event: MouseEvent<HTMLElement>) => void;
  onMouseOver?: (event: MouseEvent<HTMLElement>) => void;
  id?: string;
  disabled?: boolean;
  activeOpacity?: number;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  iconComponent?: ReactNode & ((...args: any) => ReactNode);
}
