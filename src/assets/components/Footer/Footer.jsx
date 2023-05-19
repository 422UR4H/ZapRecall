import styled from "styled-components";

export default function Footer({count}) {
    return (
        <StyledFooter data-test='footer'>
            <p>{count.done}/{count.max} CONCLUÍDOS</p>
        </StyledFooter>
    )
}


const StyledFooter = styled.footer`
    background-color: white;
    width: 100vw;
    height: 70px;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    display: flex;
    align-items: center;
    justify-content: center;
    
    position: fixed;
    bottom: 0;
    left: 0;
`;