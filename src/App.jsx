import { useState } from 'react'
import deck from './scripts/deck';
import ContentScreen from './assets/components/ContentScreen/ContentScreen';
import { GlobalStyle } from './assets/components/GlobalStyle';
import { Reset } from './assets/components/Reset';

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      {/* <InitScreen /> */}
      <ContentScreen deck={deck} />
    </>
  )
}

export default App
