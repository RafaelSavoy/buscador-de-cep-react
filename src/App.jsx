import Form from './components/Form/Form'
import Cep from './components/CepInfo/CepInfo'
import GlobalStyles from './GlobalStyles'
import { CepContextProvider } from './providers/cepProvider'
import Header from './components/Header/Header'
import { Main } from './styles'

function App() {
  return (
    <>
      <CepContextProvider>
        <GlobalStyles />
        <Header />
        <Main>
          <section>
            <Form />
            <Cep />
          </section>
        </Main>
      </CepContextProvider>
    </>
  )
}

export default App
