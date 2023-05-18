import React, { useState } from 'react';
import Top from '../Top/Top';
import Deck from '../Deck/Deck';
import Footer from '../Footer/Footer';

export default function ContentScreen(props) {
    const {deck} = props;
    const [doneCount, setDoneCount] = useState(0);

    return (
        <div>
            <Top />
            <Deck deck={deck} setDoneCount={setDoneCount} />
            <Footer doneCount={doneCount}/>
        </div>
    )
}
