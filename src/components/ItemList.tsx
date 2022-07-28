import {
  ButtonGroup,
  Checkbox,
  CloseButton,
  Flex,
  Text,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { useDrag, useDrop, XYCoord } from 'react-dnd'
import { Identifier } from 'dnd-core'
import { useTodoContext } from '../shared/hooks/useTodoData'

interface DragItem {
  id: string
  index: number
  type: string
}

interface ItemList {
  id: string
  text: string
  index: number
  checked: boolean
  onChange: (id: string) => void
  remove: (id: string) => void
}

export function ItemList({
  id,
  text,
  onChange,
  checked,
  remove,
  index,
}: ItemList) {
  const ref = useRef<HTMLDivElement>(null)

  const { moveCard } = useTodoContext()

  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    item: () => {
      return { id, index }
    },
    collect: monitor => ({ isDragging: monitor.isDragging() }),
  })

  const [{ handlerId }, dropRef] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: 'CARD',
    collect(monitor) {
      return { handlerId: monitor.getHandlerId() }
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) return

      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) return

      const hoverDimensions = ref.current.getBoundingClientRect()

      const hoverMiddleY = (hoverDimensions.bottom - hoverDimensions.top) / 2

      const clientOffset = monitor.getClientOffset()

      const hoverClientY = (clientOffset as XYCoord).y - hoverDimensions.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return

      moveCard(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })

  function execAction(fn: any, event?: any) {
    event?.stopPropagation()
    fn(id)
  }

  const opacity = isDragging ? 0 : 1

  dragRef(dropRef(ref))

  return (
    <ButtonGroup
      ref={ref}
      opacity={opacity}
      data-handle-id={handlerId}
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
