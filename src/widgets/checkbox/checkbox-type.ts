import { CheckboxProps } from "@chakra-ui/react";

export interface ICheckboxProps extends Omit<CheckboxProps,'variant'>{
  checked:boolean,
  onChange:()=>void,
  variant:'primery' | 'secondary',
  state:"selected" | "indeterminate",
  error?:boolean
}