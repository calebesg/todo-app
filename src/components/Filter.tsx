import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { ButtonCustom } from './ButtonCustom'

import { ActionType } from '../shared/types/action'

interface FilterProps {
  action: (type: ActionType) => void
}

export function Filter({ action }: FilterProps) {
  const [activeButton, setActiveButton] = useState<ActionType>('all')

  function handleFilter(type: ActionType) {
    setActiveButton(type)
    action(type)
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
