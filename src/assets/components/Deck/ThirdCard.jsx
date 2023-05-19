import React from 'react';
import styled from 'styled-components';
import { StyledFleshcard } from './StyledFleshcard';


export default function ThirdCard({ answer, markCard }) {


    return (
        <StyledThirdCard>
            <p data-test='flashcard-text'>{answer}</p>
            <div>
                <StyledButton color={'#FF3030'} data-test='no-btn' onClick={() => markCard('no')} >
                    Não lembrei
                </StyledButton>

                <StyledButton color={'#FF922E'} data-test='partial-btn' onClick={() => markCard('partial')}>
                    Quase não lembrei
                </StyledButton>

                <StyledButton color={'#2FBE34'} data-test='zap-btn' onClick={() => markCard('zap')}>
                    Zap!
                </StyledButton>
            </div>
        </StyledThirdCard>
    )
}


const StyledButton = styled.button`
    color: white;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;

    background-color: ${props => props.color};
    width: 85.17px;
    height: 37.17px;
    border-radius: 5px;
`

const StyledThirdCard = styled(StyledFleshcard)`
    background-color: #FFFFD4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
`;