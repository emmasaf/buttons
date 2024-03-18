import { Button, Spinner } from '@chakra-ui/react'
import React from 'react'
import { ICustomButton } from './custom-button-types'
import { sizes } from './mockData'

const CustomButton: React.FC<ICustomButton> = ({
  disabled,
  size,
  text,
  variant,
  loading,
}) => {
  return (
    <Button
      disabled={disabled && loading}
      bg={!disabled ? variant : `${variant}Disable`}
      size={size}
      textColor={!disabled ? `${variant}Text` : `${variant}DisableText`}
      _hover={{ bg: !disabled && `${variant}Hover` }}
      {...sizes[size]}
    >
      {loading && <Spinner color={`${variant}Text`} />} {text.toUpperCase()}
    </Button>
  )
}

export default CustomButton
