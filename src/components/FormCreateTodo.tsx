import { FormControl, Input, useStyleConfig } from '@chakra-ui/react'
import { useState } from 'react'

export function FormCreateTodo() {
  const [text, setText] = useState('')

  const styles = useStyleConfig('Input', { variant: 'solid' })

  function handleSubmit(key: string) {
    if (key !== 'Enter') return
    console.log('submited')
  }

  return (
    <FormControl onKeyDownCapture={e => handleSubmit(e.code)}>
      <Input
        __css={styles}
        value={text}
        onChange={e => setText(e.target.value)}
        type="text"
        aria-label="enter a new todo"
      />
    </FormControl>
  )
}
