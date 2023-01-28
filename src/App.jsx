import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme/theme'
import * as S from './styles'
import { GlobalStyles } from './GlobalStyles'
import { ListContainer } from './components/ListContainer/ListContainer'

function App() {
  const [theme, setTheme] = useState('dark')

  const themeToggler = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
      <S.Main>
        <GlobalStyles/>
        <S.topSide></S.topSide>
        <S.Container>
          <ListContainer toggleTheme={themeToggler}/>
        </S.Container>
      </S.Main>
    </ThemeProvider>
  )
}

export default App
