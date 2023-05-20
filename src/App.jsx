import { GlobalStyle } from './assets/components/Styles/GlobalStyle';
import { Reset } from './assets/components/Styles/Reset';
import { useState } from 'react';
import ContentScreen from './assets/components/Pages/ContentScreen';
import InitScreen from './assets/components/Pages/InitScreen';
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
  );
}

export default App;