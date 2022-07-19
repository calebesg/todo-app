import { Flex } from '@chakra-ui/react'
import { FormCreateTodo } from './components/FormCreateTodo'
import { Header } from './components/Header'
import { List } from './components/List'
import { useTodoContext } from './shared/hooks/useTodoData'

export function App() {
  const { list } = useTodoContext()

  return (
    <>
      <Header>
        <FormCreateTodo />
      </Header>

      <Flex flexDir="column" alignItems="center" mt="-12">
        {list.length > 0 && <List />}
      </Flex>
    </>
  )
}
