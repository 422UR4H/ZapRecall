import React from 'react';
import logo from '../../images/logo.png';
import styled from 'styled-components';


export default function InitScreen({ setOnStart }) {
    return (
        <StyledInitScreen>
            <div>
                <img src={logo} alt="Logo ZapRecall" />
                <h1>ZapRecall</h1>
                <button data-test='start-btn' onClick={() => setOnStart(true)}>
                    Iniciar Recall!
                </button>
            </div>
        </StyledInitScreen>
    );
}


const StyledInitScreen = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
        width: 260px;
        height: 285px;
        margin-bottom: 70px;

        display: flex;
        flex-direction: column;;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

    img {
        height: 161px;
        width: 136px;
    }

    h1 {
        color: white;
        font-family: 'Righteous', 'sans-serif';
        font-size: 36px;
        font-weight: 400;
        line-height: 45px;
        text-align: center;
        
        position: absolute;
        top: 150px;
        left: 37px;
    }

    button {
        background-color: white;
        color: #D70900;
        height: 54px;
        width: 246px;
        margin-right: 14px;
        border: 1px solid #D70900;
        border-radius: 5px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

        &:hover {
            cursor: pointer;
        }
    }
`;