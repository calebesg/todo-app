import { createContext, useEffect, useState } from 'react'
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

  useEffect(() => {
    load()
  }, [])

  useEffect(() => {
    const total = list.reduce((acc: number, cur: Todo) => {
      if (cur.isCompleted) return acc
      return acc + 1
    }, 0)

    setLeftover(total)
  }, [list])

  async function load() {
    const storage = await localStorage.getItem(
      import.meta.env.VITE_STORAGE_NAME
    )

    if (!storage) return

    const list = JSON.parse(storage)
    setList(list)
  }

  function save(data: Todo[]) {
    localStorage.setItem(
      import.meta.env.VITE_STORAGE_NAME,
      JSON.stringify(data)
    )
  }

  function updateList(todoList: Todo[]) {
    setList(todoList)
    save(todoList)
  }

  function add(value: string) {
    const id = `${new Date().toTimeString()}${Math.random()}`
    const updatedList = [...list, { id, value, isCompleted: false }]
    updateList(updatedList)
  }

  function remove(id: string) {
    const updatedList = list.filter(item => item.id !== id)
    updateList(updatedList)
  }

  function removeAllCompleted() {
    const updatedList = list.filter(item => !item.isCompleted)
    updateList(updatedList)
  }

  function changeStatus(id: string) {
    const updatedList = list.map(item => {
      if (item.id === id) item.isCompleted = !item.isCompleted
      return item
    })

    updateList(updatedList)
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
