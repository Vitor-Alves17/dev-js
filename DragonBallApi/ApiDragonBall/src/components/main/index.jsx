import './style.css'
import {Card} from "../card/index.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

export const Main = () => {

    const [characters, setCharacters] = useState([]);

    // useEffect(() => {
    //    fetch("https://dragonball-api.com/api/characters?limit=58")
    //        .then(res => res.json())
    //     .then(data => {
    //         setCharacters(data.items);
    //         console.log(data.items)
    //     })
    //        .catch(err => console.log(err));
    // }, []);

    useEffect(() => {
        axios.get("https://dragonball-api.com/api/characters?limit=58")
        .then(res => {
            setCharacters(res.data.items)
        })
            .catch(err => console.log(err))
    }, [])

    return (
        <main>
            <div className="card-wrapper">
                {characters.map((character) => {
                    return (
                        <Card url={character.image} name={character.name} description={character.description} />
                        )
                })}
            </div>

            {/*<Card url={characters[0].image} name={characters[0].name} description={characters[0].description} />*/}
            {/*/!*<Card url="gay" name="gay" description="gay" />*!/*/}
            {/*/!*<Card url="gay" name="gay" description="gay" />*!/*/}
            {/*/!*<Card url="gay" name="gay" description="gay" />*!/*/}
            {/*/!*<Card url="gay" name="gay" description="gay" />*!/*/}
            {/*/!*<Card url="gay" name="gay" description="gay" />*!/*/}
            {/*/!*<Card url="gay" name="gay" description="gay" />*!/*/}
        </main>
    )
}