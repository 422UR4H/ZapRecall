import React from 'react';
import styled from 'styled-components';
import { StyledFleshcard } from './StyledFleshcard';
import icon from '../../images/seta_virar.png';

export default function SecondCard({ question, setTemplate }) {
    return (
        <StyledSecondCard>
            <p>{question}</p>
            <button onClick={() => setTemplate('third')}><img src={icon} alt="botão flip" /></button>
        </StyledSecondCard>
    )
}


const StyledSecondCard = styled(StyledFleshcard)`
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