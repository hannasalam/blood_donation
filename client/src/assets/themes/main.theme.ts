import { createTheme } from '@mui/material'
import { blue, lightBlue, pink, red } from '@mui/material/colors'
import { Mode } from '../../contexts/themeMode.context'

const primaryColor = red.A700
const lPrimaryColor = red[500]
const dPrimaryColor = red[900]

const secondaryColor = blue['800']
const lSecondaryColor = blue['500']
const dSecondaryColor = blue['900']

export const mainTheme = (mode: Mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: primaryColor,
        light: lPrimaryColor,
        dark: dPrimaryColor,
        contrastText: '#fff',
      },
      secondary: {
        main: secondaryColor,
        light: lSecondaryColor,
        dark: dSecondaryColor,
        contrastText: '#fff',
      },
      info: {
        main: lightBlue['500'],
        light: lightBlue['300'],
        dark: lightBlue['900'],
        contrastText: '#fff',
      },
    },

    components: {
      MuiMenuItem: {
        styleOverrides: {
          root: {
            whiteSpace: 'unset',
            wordBreak: 'break-all',
          },
        },
      },
    },
  })
