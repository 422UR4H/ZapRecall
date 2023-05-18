import { useState } from 'react'
import deck from './scripts/deck';
import ContentScreen from './assets/components/ContentScreen/ContentScreen';

function App() {
  return (
    <>
      {/* <GlobalStyle /> */}
      {/* <InitScreen /> */}
      <ContentScreen deck={deck} />
    </>
  )
}

export default App
