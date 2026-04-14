import {CardCharcter, CardDescription, CardList, CardListItem, CardTitle} from "./style.js";
import {LogoAlien, LogoHeart, LogoPlanet} from "../assets/images/icons.jsx";

export const Card = ({character}) => {

    return (
        <CardCharcter>
            <img src={character.image} alt=""/>
            <CardTitle> {character.name} </CardTitle>
            <CardDescription>
                <CardList>
                    <CardListItem>
                        <LogoAlien></LogoAlien>
                        {character.species}
                    </CardListItem>
                    <CardListItem>
                        <LogoHeart></LogoHeart>
                        {character.status}
                    </CardListItem>
                    <CardListItem>
                        <LogoPlanet></LogoPlanet>
                        {character.origin.name}
                    </CardListItem>
                </CardList>
            </CardDescription>
        </CardCharcter>
    )
}