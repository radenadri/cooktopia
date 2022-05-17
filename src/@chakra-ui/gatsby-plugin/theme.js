import { extendTheme } from '@chakra-ui/react'

const theme = {
  components: {
    Button: {
      variants: {
        primary: {
          bg: 'purple.600',
          color: 'white',
          _hover: {
            bg: 'purple.500',
          }
        }
      }
    },
    Link: {
      baseStyle: {
        fontFamily: 'Source Sans Pro',
        fontWeight: '600'
      }
    },
    Heading: {
      baseStyle: {
        fontFamily: 'Playfair Display',
      }
    },
    Text: {
      baseStyle: {
        fontFamily: 'Source Sans Pro',
      }
    },
  }
}

export default extendTheme(theme);