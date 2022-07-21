import { Box, Flex, Heading, useColorMode } from '@chakra-ui/react'
import { ToggleThemeButton } from './ToggleThemeButton'

import bgDark from '../assets/bg-desktop-dark.jpg'
import bgLight from '../assets/bg-desktop-light.jpg'

interface HeaderProps {
  children?: any
}

export function Header({ children }: HeaderProps) {
  const { colorMode } = useColorMode()

  return (
    <Box
      bgImage={colorMode === 'light' ? bgLight : bgDark}
      bgSize="cover"
      as="header"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h={300}
      gap={48}
    >
      <Flex flexDirection="column" maxW="540px" w="full" gap={10}>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading as="h1" textColor="white" letterSpacing="1.25rem">
            TODO
          </Heading>
          <ToggleThemeButton />
        </Flex>
        {children}
      </Flex>
    </Box>
  )
}
