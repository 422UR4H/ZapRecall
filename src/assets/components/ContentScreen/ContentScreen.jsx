import React, { useState } from 'react';
import Top from '../Top/Top';
import Deck from '../Deck/Deck';
import Footer from '../Footer/Footer';
import styled from 'styled-components';

export default function ContentScreen(props) {
    const {deck} = props;
    const [count, setCount] = useState({done: 0, max: deck.length});

    return (
        <StyledScreen>
            <Top />
            <Deck deck={deck} count={count} setCount={setCount} />
            <Footer count={count}/>
        </StyledScreen>
    )
}


const StyledScreen = styled.div`
    background-color: #FB6B6B;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
`;