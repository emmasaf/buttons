import { SwitchProps } from "@chakra-ui/react";

export interface ICustomSwitch extends Omit<SwitchProps, 'variant' | 'width' | 'height'> {
  width?: string,
  height?: string,
  variant: 'primery' | 'secondary',
  checked:boolean,
  onChange:()=>void,
  disabled?:boolean
}