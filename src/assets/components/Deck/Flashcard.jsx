import { useState } from 'react';
import play from '../../images/seta_play.png';
import done from '../../../scripts/done';
import colors from '../../../scripts/colors';

import FirstCard from './FirstCard';
import SecondCard from './SecondCard';
import ThirdCard from './ThirdCard';

import no from '../../images/icone_erro.png';
import partial from '../../images/icone_quase.png';
import zap from '../../images/icone_certo.png';


export default function Flashcard(props) {
    const { card, i, count, setCount } = props;
    const [icon, setIcon] = useState(play);
    const [color, setColor] = useState('black');
    const [isDone, setIsDone] = useState(false);
    const [template, setTemplate] = useState('first');


    function markCard(status) {
        switch (status) {
            case 'no':
                setIcon(no);
                setColor(colors.no)
                break;
            case 'partial':
                setIcon(partial);
                setColor(colors.partial);
                break;
            case 'zap':
                setIcon(zap);
                setColor(colors.zap);
                break;
        }
        setIsDone(true);
        setTemplate('first');
        done.push({ status: status, icon: icon });
        setCount({ done: done.length, max: count.max });
    }

    return (
        <>
            {template === 'second' ? <SecondCard question={card.question} setTemplate={setTemplate} /> :
                template === 'third' ? <ThirdCard answer={card.answer} markCard={markCard} /> :
                    <FirstCard i={i} icon={icon} color={color} isDone={isDone} setTemplate={setTemplate} />}
        </>
    );
}
