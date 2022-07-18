import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'

const theme = {
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  colors: {
    grayish: {
      50: 'hsl(0, 0%, 98%)',
      100: 'hsl(236, 33%, 92%)',
      200: 'hsl(233, 11%, 84%)',
      300: 'hsl(234, 39%, 85%)',
      400: 'hsl(236, 9%, 61%)',
      500: 'hsl(234, 11%, 52%)',
      600: 'hsl(235, 19%, 35%)',
      700: 'hsl(233, 14%, 35%)',
      800: 'hsl(237, 14%, 26%)',
      900: 'hsl(235, 24%, 19%)',
      1000: 'hsl(235, 21%, 11%)',
    },
    blue: {
      500: 'hsl(220, 98%, 61%)',
    },
    green: {
      500: 'hsl(192, 100%, 67%)',
    },
    purple: {
      500: 'hsl(280, 87%, 65%)',
    },
  },
  styles: {
    global: (props: Dict<any>) => ({
      body: {
        fontFamily: 'Josefin Sans, sans-serif',
        fontSize: '18px',
        bg: mode('grayish.100', 'grayish.1000')(props),
      },
    }),
  },
}

export default extendTheme(theme)
