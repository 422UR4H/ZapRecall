import Flashcard from './Flashcard';

export default function Deck({ deck, count, setCount }) {
    let i = 1;
    return (
        <>
            {deck.map((card, key) =>
                <Flashcard key={key}
                    card={card}
                    i={i++}
                    count={count}
                    setCount={setCount}
                />
            )}
        </>
    );
}