import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme/theme'
import { Container } from './styles'
import { GlobalStyles } from './GlobalStyles'
import { ListContainer } from './components/ListContainer/ListContainer'

function App() {
  const [theme, setTheme] = useState('dark')


  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
      <GlobalStyles/>
      <Container>
        <ListContainer/>
      </Container>
    </ThemeProvider>
  )
}

export default App
