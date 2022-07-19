import { createContext, useState } from 'react'

type Todo = {
  id: string
  value: string
  isCompleted: boolean
}

type TodoContextType = {
  list: Todo[]
  add: (value: string) => void
  remove: (id: string) => void
  changeStatus: (id: string) => void
}

const TodoContext = createContext<TodoContextType | null>(null)

interface TodoProviderProps {
  children: any
}

function TodoProvider({ children }: TodoProviderProps) {
  const [list, setList] = useState<Todo[]>([])

  function add(value: string) {
    const id = `${new Date().toTimeString()}${Math.random()}`

    const todo: Todo = {
      id,
      value,
      isCompleted: false,
    }

    setList([...list, todo])
  }

  function remove(id: string) {
    const updatedList = list.filter(item => item.id !== id)
    setList(updatedList)
  }

  function changeStatus(id: string) {
    const updatedList = list.map(item => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted
      }
      return item
    })

    setList(updatedList)
  }

  return (
    <TodoContext.Provider value={{ list, add, remove, changeStatus }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContext
export { TodoProvider }
