type colorVariant = 'primery' | 'secondary' | 'pseudo'
type buttonSize = 'm' | 's' | 'xs' ;


export type ICustomButton = {
  variant: colorVariant,
  size:buttonSize,
  text:string,
  disabled:boolean,
  loading:boolean
}