import { ThemeProvider,createTheme } from '@mui/material'
import { defaultTheme } from './assets/defaultTheme'
import './App.css'
function App() {

  const theme = createTheme(defaultTheme)
  
  return (
    <>
      <ThemeProvider theme={theme} >
        <Page>
          <Main />
        </Page>
      </ThemeProvider>
    </>
  )
}

export default App
