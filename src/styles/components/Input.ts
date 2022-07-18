import { ComponentStyleConfig } from '@chakra-ui/react'

const Input: ComponentStyleConfig = {
  variants: {
    solid: {
      background: 'black',
      color: 'white',
    },
  },
  defaultProps: {
    variant: 'solid',
  },
}

export default Input
