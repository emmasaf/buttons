import React from 'react'
import { ICheckboxProps } from './checkbox-type'
import { Checkbox } from '@chakra-ui/react'
import { CheckIcon } from '../../icons/CheckIcon'
import { MinusIcon } from '../../icons/MinusIcon'

const CustomCheckbox: React.FC<ICheckboxProps> = ({
  variant,
  checked,
  onChange,
  state,
  error,
  disabled = false,
  ...rest
}) => {
  let inputColor = disabled ? `${variant}Hover` : `${variant}Check`
  let controlColor = disabled ? `${variant}Hover` : `auto`
  return (
    <Checkbox
      width="24px"
      checked={disabled ? true : checked}
      onChange={onChange}
      height="24px"
      margin="4px"
      // disabled={disabled}
      borderRadius="6px"
      bg={controlColor}
      borderColor={error ? 'red' : controlColor}
      sx={{
        '& .chakra-checkbox__control': {
          width: '24px',
          height: '24px',
          borderRadius: '6px',
          padding: 0,
        
        },
        '& .css-1ydjfm6[data-checked] ': {
          borderColor: inputColor,
          bg: inputColor,
     
        },
      }}
      icon={state === 'selected' ? <CheckIcon /> : <MinusIcon />}
      {...rest}
    />
  )
}

export default CustomCheckbox
