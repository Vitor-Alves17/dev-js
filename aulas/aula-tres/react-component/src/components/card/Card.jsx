import "./style.css"

export default function Card(props) {
    return (
        <div className="card">
            <h1>{props.tittle}</h1>
            <img src={props.imge} alt="funfo nao"/>
            <p>{props.descriptionn}</p>
            <p>{props.categoria}</p>
        </div>
    )
}