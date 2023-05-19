import styled from "styled-components";


export default function Footer({ maxCount, done }) {
    return (
        <StyledFooter data-test='footer'>
            <p>{done.length}/{maxCount} CONCLUÍDOS</p>
            <div>{done.map((icon, i) => <img key={i} src={icon} />)}</div>
        </StyledFooter>
    )
}


const StyledFooter = styled.footer`
    background-color: white;
    width: 100vw;
    height: 70px;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    position: fixed;
    bottom: 0;
    left: 0;

    img {
        margin-top: 5px;
        margin-right: 5px;
    }
`;