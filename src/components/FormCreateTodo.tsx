import { FormControl, Input, useColorMode } from '@chakra-ui/react'
import { useState } from 'react'
import { useTodoContext } from '../shared/hooks/useTodoData'

export function FormCreateTodo() {
  const [text, setText] = useState('')
  const { colorMode } = useColorMode()
  const { add } = useTodoContext()

  function handleSubmit(key: string) {
    if (key !== 'Enter' || text === '') return
    add(text)
    setText('')
  }

  return (
    <FormControl onKeyDownCapture={e => handleSubmit(e.code)}>
      <Input
        value={text}
        background={colorMode === 'dark' ? 'grayish.900' : 'grayish.50'}
        border="none"
        h="16"
        placeholder="enter you todo"
        onChange={e => setText(e.target.value)}
        type="text"
        aria-label="enter a new todo"
        boxShadow="2xl"
      />
    </FormControl>
  )
}
