import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../themes/default'
import GlobalStyles from './Global.styles'

const Theme = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

export default Theme
