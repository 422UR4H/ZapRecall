import Flashcard from '../Flashcard/Flashcard';

export default function Deck({deck, setDoneCount}) {
    let i = 1;
    return (
        <>
            {deck.map((card, key) =>
                <Flashcard key={key} card={card} i={i++} setDoneCount={setDoneCount} />
            )}
        </>
    );
}