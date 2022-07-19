import { Flex } from '@chakra-ui/react'
import { FormCreateTodo } from './components/FormCreateTodo'
import { Header } from './components/Header'
import { List } from './components/List'

export function App() {
  return (
    <>
      <Header>
        <FormCreateTodo />
      </Header>

      <Flex flexDir="column" alignItems="center" mt="-12">
        <List />
      </Flex>
    </>
  )
}
