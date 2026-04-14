import {ContainerCardCharacter, SectionChar, SpanCharacters, Title} from "./styles.js";
import {useEffect, useState} from "react";
import axios from "axios";
import {Card} from "../Card/index.jsx";


export const SectionCharacters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {console.log(response.data.results)
                setCharacters(response.data.results);})
    }, []);

    return (
        <SectionChar>
            <Title> Nossos <SpanCharacters>Personagens</SpanCharacters></Title>

            <ContainerCardCharacter>
                {characters.map((character) => (
                    <Card
                        character={character}
                    />
                ))}
            </ContainerCardCharacter>
        </SectionChar>
    )
}