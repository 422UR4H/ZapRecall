import React, { useState } from 'react';
import Top from '../Body/Top';
import Deck from '../Body/Deck';
import Footer from '../Footer/Footer';
import styled from 'styled-components';


export default function ContentScreen({ deck }) {
    const [done, setDone] = useState([]);

    return (
        <StyledScreen isfinished={done.length === deck.length}>
            <Top />
            <Deck deck={deck} done={done} setDone={setDone} />
            <Footer maxCount={deck.length} done={done} />
        </StyledScreen>
    );
}


const StyledScreen = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    margin-bottom: ${props => props.isfinished ? '170px' : '70px'};

    display: flex;
    flex-direction: column;
    align-items: center;
`;