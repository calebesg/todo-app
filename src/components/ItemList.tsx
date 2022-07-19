import {
  ButtonGroup,
  Checkbox,
  CloseButton,
  Flex,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'

interface ItemList {
  text: string
}

export function ItemList({ text }: ItemList) {
  const [checked, setChecked] = useState(false)

  function handleChange() {
    console.log('oi')
    setChecked(!checked)
  }

  return (
    <ButtonGroup
      display="flex"
      w="full"
      alignItems="center"
      borderBottom="1px"
      borderColor="grayish.800"
      _light={{ borderColor: 'grayish.100' }}
      cursor="pointer"
      px="5"
      h="16"
      gap={2}
      onClick={() => handleChange()}
    >
      <Flex
        border="1px"
        borderRadius="full"
        borderColor="grayish.800"
        _light={{ borderColor: 'grayish.100' }}
        justifyContent="center"
        alignItems="center"
        w="5"
        h="5"
        onClick={e => e.stopPropagation()}
      >
        <Checkbox
          w="full"
          h="full"
          display="flex"
          justifyContent="center"
          alignItems="center"
          colorScheme={checked ? 'none' : ''}
          rounded="full"
          outline="none"
          borderColor="transparent"
          borderRadius="full"
          bgGradient={checked ? 'linear(to-tl, purple.500, green.500)' : ''}
          isChecked={checked}
          onChange={e => handleChange()}
        />
      </Flex>

      <Text
        fontWeight="light"
        fontSize="md"
        flex={1}
        textDecor={checked ? 'line-through' : 'unset'}
        opacity={checked ? 0.6 : 1}
      >
        {text}
      </Text>

      <CloseButton
        rounded="full"
        visibility="hidden"
        _groupHover={{ visibility: 'visible' }}
      />
    </ButtonGroup>
  )
}
