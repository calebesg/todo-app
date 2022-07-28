import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { App } from './App'
import { TodoProvider } from './shared/contexts/TodoContext'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <TodoProvider>
        <DndProvider backend={HTML5Backend}>
          <App />
        </DndProvider>
      </TodoProvider>
    </ChakraProvider>
  </>
)
