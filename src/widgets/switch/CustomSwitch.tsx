import { Switch } from '@chakra-ui/react'
import React from 'react'
import { ICustomSwitch } from './custom-switch-types'

const CustomSwitch: React.FC<ICustomSwitch> = ({
  width = '48px',
  height = '20px',
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
      disabled={disabled}
      {...rest}
      sx={{
        '& .chakra-switch__thumb': {
          bg: 'white',
          width: height,
          height: height,
          transform: checked ? `translateX(calc(${width} - ${height}))` : 'translateX(0)', 
          transition: 'transform 0.3s ease', 
        },
        '& .chakra-switch__track': {
          bg: disabled
            ? `${variant}Disable`
            : checked
            ? `${variant}Active`
            : `${variant}Inactive`,
            width: width,
            height: height,
        },
        width: width,
        height: height,
        margin:'4px'
      }}
    />
  )
}

export default CustomSwitch
