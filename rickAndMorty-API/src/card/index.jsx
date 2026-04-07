import axios from 'axios';

export const Card = () => {

    axios.get("https://rickandmortyapi.com/api/character")
    .then(response => console.log(response))
        .catch(error => console.log(error));

    return (
        <h1>card</h1>
    )
}