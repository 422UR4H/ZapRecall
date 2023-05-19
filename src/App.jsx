import { GlobalStyle } from './assets/components/GlobalStyle';
import { Reset } from './assets/components/Reset';
import { useState } from 'react';
import ContentScreen from './assets/components/ContentScreen/ContentScreen';
import InitScreen from './assets/components/ContentScreen/InitScreen';
import deck from './scripts/deck';

function App() {
  const [onStart, setOnStart] = useState(false);

  return (
    <>
      <Reset />
      <GlobalStyle />
      {onStart ? <ContentScreen deck={deck} /> :
        <InitScreen setOnStart={setOnStart} />}
    </>
  )
}

export default App
