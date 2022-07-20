import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { ButtonCustom } from './ButtonCustom'

type ActionType = 'all' | 'active' | 'completed'

export function Filter() {
  const [activeButton, setActiveButton] = useState<ActionType>('all')

  function handleFilter(type: ActionType) {
    console.log(type)
    setActiveButton(type)
  }

  return (
    <Flex alignItems="center" gap={4}>
      <ButtonCustom
        active={activeButton === 'all'}
        action={() => handleFilter('all')}
        text="All"
      />
      <ButtonCustom
        active={activeButton === 'active'}
        action={() => handleFilter('active')}
        text="Active"
      />
      <ButtonCustom
        active={activeButton === 'completed'}
        action={() => handleFilter('completed')}
        text="Completed"
      />
    </Flex>
  )
}
