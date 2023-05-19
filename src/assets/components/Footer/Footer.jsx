import styled from "styled-components";
import noIcon from '../../images/icone_erro.png';
import partialIcon from '../../images/icone_quase.png';
import FinishText from "./FinishText";
import partyIcon from '../../images/party.png';
import sadIcon from '../../images/sad.png';


export default function Footer({ maxCount, done }) {
    const msg = { icon: '', h2: '', p: '' };
    let isFinished = false;

    if (maxCount === done.length) {
        const isOneError = done.find((icon) => icon === noIcon);
        isFinished = true;

        if (isOneError) {
            msg.icon = sadIcon;
            msg.h2 = 'Putz...';
            msg.p = 'Ainda faltam alguns... Mas não desanime!';
        } else {
            msg.icon = partyIcon;
            msg.h2 = 'Parabéns!';
            msg.p = 'Você não esqueceu de nenhum flashcard!';
        }
    }

    return (
        <StyledFooter isfinished={isFinished} data-test='footer'>
            {isFinished && <FinishText msg={msg} />}
            <p>{done.length}/{maxCount} CONCLUÍDOS</p>
            <div>{done.map((icon, i) =>
                <img key={i}
                    src={icon}
                    data-test={icon === noIcon ? 'no-icon' : icon === partialIcon ? 'partial-icon' : 'zap-icon'}
                />)}
            </div>
        </StyledFooter>
    );
}


const StyledFooter = styled.footer`
    background-color: white;
    width: 100vw;
    height: ${props => props.isfinished ? '170px' : '70px'};
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    position: fixed;
    bottom: 0;
    left: 0;

    p {
        margin-top: 5px;
    }

    img {
        margin-top: 5px;
        margin-right: 5px;
    }
`;