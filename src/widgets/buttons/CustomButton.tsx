import { Button } from '@chakra-ui/react'
import React from 'react'
import { ICustomButton } from './custom-button-types'
import { sizes } from './mockData'

const CustomButton: React.FC<ICustomButton> = ({
  disabled,
  size,
  text,
  variant,
}) => {
  return (
    <Button
    
      disabled={disabled}
      bg={!disabled ? variant : `${variant}Disable`}
      size={size}
      textColor={!disabled ? `${variant}Text` : `${variant}DisableText`}
      _hover={{ bg: !disabled && `${variant}Hover` }}
      {...sizes[size]}
    >
      {text.toUpperCase()}
    </Button>
  )
}

export default CustomButton
