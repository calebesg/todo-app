import { createContext, useState } from 'react'
import { Todo } from '../types/todo'

type TodoContextType = {
  list: Todo[]
  leftover: number
  add: (value: string) => void
  remove: (id: string) => void
  removeAllCompleted: () => void
  changeStatus: (id: string) => void
}

const TodoContext = createContext<TodoContextType>({
  list: [],
  leftover: 0,
  add: () => {},
  remove: () => {},
  removeAllCompleted: () => {},
  changeStatus: () => {},
})

interface TodoProviderProps {
  children: any
}

function TodoProvider({ children }: TodoProviderProps) {
  const [list, setList] = useState<Todo[]>([])
  const [leftover, setLeftover] = useState(0)

  function add(value: string) {
    const id = `${new Date().toTimeString()}${Math.random()}`

    const updatedList = [...list, { id, value, isCompleted: false }]

    setList(updatedList)
    _countLeftover(updatedList)
  }

  function remove(id: string) {
    const updatedList = list.filter(item => item.id !== id)
    setList(updatedList)
    _countLeftover(updatedList)
  }

  function removeAllCompleted() {
    const updatedList = list.filter(item => !item.isCompleted)
    setList(updatedList)
  }

  function changeStatus(id: string) {
    const updatedList = list.map(item => {
      if (item.id === id) item.isCompleted = !item.isCompleted
      return item
    })

    setList(updatedList)
    _countLeftover(updatedList)
  }

  function _countLeftover(list: Todo[]) {
    setLeftover(list.filter(item => !item.isCompleted).length)
  }

  return (
    <TodoContext.Provider
      value={{ list, add, remove, leftover, changeStatus, removeAllCompleted }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContext
export { TodoProvider }
