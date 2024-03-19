import { Button, Spinner } from '@chakra-ui/react'
import React, { cloneElement } from 'react'
import { ICustomButton } from './custom-button-types'
import { sizes, iconSizes } from './mockData'

const CustomButton: React.FC<ICustomButton> = ({
  disabled,
  size,
  text,
  variant,
  loading,
  icon,
  left,
}) => {
  return (
    <Button
      disabled={disabled || loading}
      bg={!disabled ? variant : `${variant}Disable`}
      size={size}
      textColor={!disabled ? `${variant}Text` : `${variant}DisableText`}
      _hover={{ bg: !disabled && `${variant}Hover` }}
      {...sizes[size]}
      flexDirection={left ? 'row-reverse' : 'row'}
    >
      {loading && <Spinner {...iconSizes[size]} color={`${variant}Text`} />}

      {!loading && (icon ? cloneElement(icon, { ...iconSizes[size] }) : null)}
      <span>{text && text.toUpperCase()}</span>
    </Button>
  )
}

export default CustomButton
