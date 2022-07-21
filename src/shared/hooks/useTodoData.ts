import { useContext } from 'react'
import TodoContext from '../contexts/TodoContext'

export const useTodoContext = () => useContext(TodoContext)
