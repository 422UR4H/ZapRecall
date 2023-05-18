import { useState } from 'react';
import done from '../../../scripts/done';
import play from '../../images/seta_play.png';
import turn from '../../images/seta_virar.png';
import no from '../../images/icone_erro.png';
import partial from '../../images/icone_quase.png';
import zap from '../../images/icone_certo.png';


export default function Flashcard(props) {
    const {card, i, setDoneCount} = props;
    let [icon, setIcon] = useState(play);

    function markCard(newIcon) {
        setIcon(newIcon);
        done.push({id: i, card: card });
        setDoneCount(done.length);
    }

    return (
        <div className="card">
            <h2>Pergunta {i}</h2>
            <button><img src={icon} alt="botão play" /></button>
            <p className="question">{card.question}</p>
            <button><img src={turn} alt="botão virar" /></button>
            <p className="answer">{card.answer}</p>
            <button className="no" onClick={() => markCard(no)}>Não lembrei</button>
            <button className="partial" onClick={() => markCard(partial)}>Quase não lembrei</button>
            <button className="zap" onClick={() => markCard(zap)}>Zap!</button>
        </div>
    );
}