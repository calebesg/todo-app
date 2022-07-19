import {
  ButtonGroup,
  Checkbox,
  CloseButton,
  Flex,
  Text,
} from '@chakra-ui/react'

interface ItemList {
  id: string
  text: string
  checked: boolean
  onChange: (id: string) => void
  remove: (id: string) => void
}

export function ItemList({ id, text, onChange, checked, remove }: ItemList) {
  function execAction(fn: any, event?: any) {
    event?.stopPropagation()
    fn(id)
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
      onClick={e => execAction(onChange, e)}
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
          onChange={e => execAction(onChange, e)}
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
        onClick={e => execAction(remove, e)}
        rounded="full"
        visibility="hidden"
        _groupHover={{ visibility: 'visible' }}
      />
    </ButtonGroup>
  )
}
