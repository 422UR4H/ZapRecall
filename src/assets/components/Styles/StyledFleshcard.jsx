import styled from "styled-components";

export const StyledFleshcard = styled.div`
    background-color: white;
    width: 300px;
    border-radius: 5px;
    margin-bottom: 25px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);

    display: flex;

    button {
        border: none;
        padding: 0;
        
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            cursor: pointer;
        }

        &:disabled {
            cursor: default;
        }
    }
`;