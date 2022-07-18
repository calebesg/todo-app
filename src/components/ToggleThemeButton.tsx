import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, useColorMode } from '@chakra-ui/react'

export function ToggleThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button
      w={10}
      h={10}
      rounded="full"
      bg="transparent"
      textColor="white"
      onClick={toggleColorMode}
    >
      {colorMode === 'light' ? (
        <SunIcon w={6} h={6} />
      ) : (
        <MoonIcon w={6} h={6} />
      )}
    </Button>
  )
}
