import { useEffect, useState } from 'react'
import { ActionType } from '../types/action'
import { Todo } from '../types/todo'
import { useTodoContext } from './useTodoData'

function useFilter() {
  const { list, add, changeStatus, leftover, remove, removeAllCompleted } =
    useTodoContext()
  const [filter, setFilter] = useState<Todo[]>(list)

  useEffect(() => {
    setFilter(list)
  }, [list])

  function handleFilter(type: ActionType) {
    switch (type) {
      case 'active':
        setFilter(list.filter(item => !item.isCompleted))
        break
      case 'completed':
        setFilter(list.filter(item => item.isCompleted))
        break
      default:
        setFilter(list)
    }
  }

  return {
    list: filter,
    onFilter: handleFilter,
    todo: { list, add, changeStatus, leftover, remove, removeAllCompleted },
  }
}

export default useFilter
