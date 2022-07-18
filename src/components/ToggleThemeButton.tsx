import { Button, useColorMode } from '@chakra-ui/react'
import { Moon, Sun } from 'phosphor-react'

export function ToggleThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button onClick={toggleColorMode}>
      {colorMode === 'light' ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  )
}
