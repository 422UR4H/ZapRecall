import React, { useState } from 'react';
import Top from '../Top/Top';
import Deck from '../Deck/Deck';
import Footer from '../Footer/Footer';
import styled from 'styled-components';


export default function ContentScreen({ deck }) {
    const [done, setDone] = useState([]);

    return (
        <StyledScreen>
            <Top />
            <Deck deck={deck} done={done} setDone={setDone} />
            <Footer maxCount={deck.length} done={done} />
        </StyledScreen>
    );
}


const StyledScreen = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    margin-bottom: 80px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;