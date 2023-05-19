import React from 'react'
import { StyledFleshcard } from './StyledFleshcard';
import styled from 'styled-components';

export default function FirstCard(props) {
    const { i, icon, color, isDone, setTemplate } = props;
    
    return (
        <StyledFirstCard color={color} isDone={isDone}>
            <h2>Pergunta {i}</h2>
            <button disabled={isDone} onClick={() => setTemplate('second')}>
                <img src={icon} alt="botão play" />
            </button>
        </StyledFirstCard>
    )
}


const StyledFirstCard = styled(StyledFleshcard)`
    height: 65px;
    align-items: center;
    justify-content: space-between;

    h2 {
        color: ${props => props.color};
        text-decoration: ${props => props.isDone ? 'line-through' : 'none'};
    }

    button {
        background-color: inherit;
    }
`;