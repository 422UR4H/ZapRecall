import React from 'react';
import styled from 'styled-components';


export default function FinishText({ msg }) {
    return (
        <StyledFinishText data-test='finish-text'>
            <div>
                <img src={msg.icon} />
                <h2>{msg.h2}</h2>
            </div>
            <p>{msg.p}</p>
        </StyledFinishText>
    )
}


const StyledFinishText = styled.div`
    font-size: 18px;
    line-height: 21.6px;
    padding: 0 110px;

    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        display: flex;
        align-items: center;

        img {
            width: 23px;
            height: 23px;
        }

        h2 {
            margin-top: 8px;
            margin-left: 10px;
            font-weight: 700;
        }
    }

    p {
        font-weight: 400;
        text-align: center;
        margin: 14px 0;
    }
`;