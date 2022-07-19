import { Button, Flex, Text, useColorMode } from '@chakra-ui/react'
import { ItemList } from './ItemList'

export function List() {
  const { colorMode } = useColorMode()

  return (
    <Flex
      background={colorMode === 'dark' ? 'grayish.900' : 'grayish.50'}
      rounded="md"
      direction="column"
      maxW="540px"
      w="full"
      boxShadow="2xl"
    >
      <Flex direction="column">
        <ItemList text="Fazer Compras" />
        <ItemList text="Walk around the park" />
        <ItemList text="Walk around the park" />
      </Flex>

      <Flex justifyContent="space-between" alignItems="center" px="5" py="1">
        <Text fontSize="sm" fontWeight="normal" color="grayish.500">
          5 items left
        </Text>
        <Button variant="unstyled" fontWeight="normal" fontSize="sm">
          Clear Completed
        </Button>
      </Flex>
    </Flex>
  )
}
