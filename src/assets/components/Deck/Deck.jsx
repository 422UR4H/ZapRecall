import Flashcard from './Flashcard';

export default function Deck({ deck, done, setDone }) {
    let i = 1;
    return (
        <>
            {deck.map((card, key) =>
                <Flashcard key={key}
                    card={card}
                    i={i++}
                    done={done}
                    setDone={setDone}
                />
            )}
        </>
    );
}