import styled from "styled-components";
import logo from "../../images/logo.png";

export default function Top() {
    return (
        <StyledTop>
            <img src={logo} alt="logo zap recall" />
            <h1>ZapRecall</h1>
        </StyledTop>
    );
}


const StyledTop = styled.header`
    margin-top: 42px;
    margin-bottom: 51px;
    
    display: flex;
    align-items: center;

    img {
        width: 52px;
        height: 60px;
    }
    h1 {
        color: white;
        font-family: 'Righteous', 'sans-sefif';
        font-size: 36px;
        font-weight: 400;
        line-height: 44.7px;
        margin-left: 20px;
    }
`;