import { Flex, Text, useColorMode } from '@chakra-ui/react'
import { useTodoContext } from '../shared/hooks/useTodoData'
import { ButtonCustom } from './ButtonCustom'
import { Filter } from './Filter'
import { ItemList } from './ItemList'

export function List() {
  const { colorMode } = useColorMode()
  const { list, leftover, changeStatus, remove, removeAllCompleted } =
    useTodoContext()

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
        {list.map((item, index) => (
          <ItemList
            key={index}
            id={item.id}
            text={item.value}
            checked={item.isCompleted}
            onChange={changeStatus}
            remove={remove}
          />
        ))}
      </Flex>

      <Flex justifyContent="space-between" alignItems="center" px="5" py="4">
        <Text fontSize="sm" fontWeight="normal" color="grayish.500">
          {leftover} items left
        </Text>

        <Filter />

        <ButtonCustom text="Clear Completed" action={removeAllCompleted} />
      </Flex>
    </Flex>
  )
}
