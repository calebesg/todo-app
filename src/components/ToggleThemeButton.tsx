import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, Text, useColorMode } from '@chakra-ui/react'

export function ToggleThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button
      w={10}
      h={10}
      autoFocus
      rounded="full"
      bg="transparent"
      textColor="white"
      onClick={toggleColorMode}
    >
      <Text srOnly>Toggle Theme</Text>
      {colorMode === 'light' ? (
        <SunIcon w={6} h={6} />
      ) : (
        <MoonIcon w={6} h={6} />
      )}
    </Button>
  )
}
