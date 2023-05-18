import deck from "../../../scripts/deck";

export default function Footer({doneCount}) {
    return (
        <footer>
            {doneCount}/{deck.length} CONCLUÍDOS
        </footer>
    )
}