export default function PokeCard(props) {
    return (
        <article>
            <img src={props.image} alt="asas"/>
            <p>{props.namex}</p>
            <p>{props.type}</p>
        </article>
    )
}