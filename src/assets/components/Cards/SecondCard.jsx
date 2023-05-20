import React from 'react';
import styled from 'styled-components';
import icon from '../../images/seta_virar.png';
import { StyledFleshcard } from '../Styles/StyledFleshcard';


export default function SecondCard({ question, setTemplate }) {
    return (
        <StyledSecondCard>
            <p data-test='flashcard-text'>{question}</p>
            <button data-test='turn-btn' onClick={() => setTemplate('third')}>
                <img src={icon} alt="botão flip" />
            </button>
        </StyledSecondCard>
    );
}


const StyledSecondCard = styled(StyledFleshcard)`
    background-color: #FFFFD4;
    height: 130px;
    position: relative;

    button {
        background-color: inherit;

        position: absolute;
        bottom: 10px;
        right: 15px;

        img {
            width: 30px;
            height: 20px;
        }
    }
`;