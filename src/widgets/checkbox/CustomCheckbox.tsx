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
  ...rest
}) => {

  return (
    <Checkbox
      width="24px"
      checked={checked}
      onChange={onChange}
      height="24px"
      margin="4px"
      borderColor={error ? 'red' :'auto'}
      sx={{
        '& .chakra-checkbox__control': {
          width: '24px',
          height: '24px',
          borderRadius: '6px',
          padding: 0,
        },
        '& .css-1ydjfm6[data-checked] ': {
          borderColor: `${variant}Check`,
          bg: `${variant}Check`,
          '&:hover': {
            bg: `${variant}Hover`, // Change background color on hover
            borderColor: `${variant}Hover`, // Change border color on hover
          },
        },
      }}
      icon={state === 'selected' ? <CheckIcon /> : <MinusIcon />}
      {...rest}
    />
  )
}

export default CustomCheckbox
