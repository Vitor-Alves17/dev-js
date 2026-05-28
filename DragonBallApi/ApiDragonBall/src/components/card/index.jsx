import './style.css'

export const Card = (props) => {
    return (
        <div className="card">
            <img src={props.url} alt=""/>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>


    )
}