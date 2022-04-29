import { useState } from 'react'
import Form from './components/Form/Form'
import Cep from './components/CepInfo/CepInfo'
import GlobalStyles from './GlobalStyles'
import styled from 'styled-components'
import { CepContextProvider } from './providers/cepProvider'
import Header from './components/Header/Header'
import { motion } from 'framer-motion'

const Main = styled(motion.main)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 120px);
`

const animation = {
  hidden: { opacity: 0,x:200},
  show: { opacity: 1,x: 0, transition: { delay: 0.5 } }
}

function App() {
  return (
    <>
      <CepContextProvider>
        <GlobalStyles />
        <Header />
        <Main
          variants={animation}
          initial='hidden'
          animate='show'
        >
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
