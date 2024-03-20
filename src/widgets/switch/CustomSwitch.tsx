import { Switch } from '@chakra-ui/react'
import React from 'react'
import { ICustomSwitch } from './custom-switch-types'

const CustomSwitch: React.FC<ICustomSwitch> = ({
  variant,
  checked,
  onChange,
  disabled,
  ...rest
}) => {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      isDisabled={disabled}
      {...rest}
      sx={{
        '& .chakra-switch__thumb': {
          bg: 'white',
          width: "20px",
          height: "20px",
          transform: checked ? `translateX(28px)` : 'translateX(0)', 
          transition: 'transform 0.3s ease', 
        },
        '& .chakra-switch__track': {
          bg: disabled
            ? `${variant}Disable`
            : checked
            ? `${variant}Active`
            : `${variant}Inactive`,
            width: "48px",
            height: "20px",
        },
        width: "48px",
        height: "20px",
        margin:'4px'
      }}
    />
  )
}

export default CustomSwitch
