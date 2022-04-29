import { useState } from 'react'
import Form from './components/Form/Form'
import Cep from './components/CepInfo/CepInfo'
import GlobalStyles from './GlobalStyles'
import styled from 'styled-components'
import { CepContextProvider } from './providers/cepProvider'
import Header from './components/Header/Header'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 100px);
`

function App() {
  return (
    <>
      <CepContextProvider>
        <GlobalStyles />
        <Header/>
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
