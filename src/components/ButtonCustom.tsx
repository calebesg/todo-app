import { Button, useColorMode } from '@chakra-ui/react'

interface ButtonCustomProps {
  text: string
  active?: boolean
  action?: () => void
}

export function ButtonCustom({ text, action, active }: ButtonCustomProps) {
  const { colorMode } = useColorMode()

  const colorHover = colorMode === 'light' ? 'grayish.700' : 'grayish.50'

  return (
    <Button
      variant="unstyled"
      __css={{
        padding: 0,
        width: 'fit-content',
        fontWeight: 'normal',
      }}
      fontSize="sm"
      color={active ? 'blue.500' : 'grayish.500'}
      _hover={{ color: active ? '' : colorHover }}
      onClick={action}
    >
      {text}
    </Button>
  )
}
