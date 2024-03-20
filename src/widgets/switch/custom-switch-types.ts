import { SwitchProps } from "@chakra-ui/react";

export interface ICustomSwitch extends Omit<SwitchProps, 'variant' > {
  variant: 'primery' | 'secondary',
  checked:boolean,
  onChange:()=>void,
  disabled?:boolean
}