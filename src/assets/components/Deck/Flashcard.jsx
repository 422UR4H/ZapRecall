import { useState } from 'react';
import play from '../../images/seta_play.png';
import colors from '../../../scripts/colors';

import FirstCard from './FirstCard';
import SecondCard from './SecondCard';
import ThirdCard from './ThirdCard';

import no from '../../images/icone_erro.png';
import partial from '../../images/icone_quase.png';
import zap from '../../images/icone_certo.png';


export default function Flashcard(props) {
    const { card, i, done, setDone } = props;
    const [icon, setIcon] = useState(play);
    const [color, setColor] = useState('black');
    const [isDone, setIsDone] = useState(false);
    const [template, setTemplate] = useState('first');
    const [dataTest, setDataTest] = useState('');


    function markCard(status) {
        let tempIcon;
        switch (status) {
            case 'no':
                tempIcon = no;
                setColor(colors.no);
                setDataTest('no-icon');
                break;
            case 'partial':
                tempIcon = partial;
                setColor(colors.partial);
                setDataTest('partial-icon');
                break;
            case 'zap':
                tempIcon = zap;
                setColor(colors.zap);
                setDataTest('zap-icon');
                break;
        }
        const tempDone = [...done, tempIcon];
        setDone(tempDone);
        setIcon(tempIcon);
        setIsDone(true);
        setTemplate('first');
    }

    return (
        <div data-test='flashcard'>
            {template === 'second' ? (
                <SecondCard question={card.question} setTemplate={setTemplate} />
            ) : template === 'third' ? (
                <ThirdCard answer={card.answer} markCard={markCard} />
            ) : (
                <FirstCard i={i}
                    icon={icon}
                    color={color}
                    isDone={isDone}
                    setTemplate={setTemplate}
                    dataTest={dataTest}
                />
            )}
        </div>
    );
}
