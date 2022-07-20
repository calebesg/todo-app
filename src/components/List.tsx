import { Flex, Text } from '@chakra-ui/react'
import useFilter from '../shared/hooks/useFilter'
import { ButtonCustom } from './ButtonCustom'
import { Filter } from './Filter'
import { ItemList } from './ItemList'

export function List() {
  const { list, onFilter, todo } = useFilter()

  return (
    <Flex
      background="grayish.900"
      _light={{ background: 'grayish.50' }}
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
            onChange={todo.changeStatus}
            remove={todo.remove}
          />
        ))}
      </Flex>

      <Flex justifyContent="space-between" alignItems="center" px="5" py="4">
        <Text fontSize="sm" fontWeight="normal" color="grayish.500">
          {todo.leftover} items left
        </Text>

        <Filter action={onFilter} />

        <ButtonCustom text="Clear Completed" action={todo.removeAllCompleted} />
      </Flex>
    </Flex>
  )
}
