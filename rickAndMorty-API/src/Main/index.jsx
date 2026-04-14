import {Button, ContentBtn, ContentH1, ContentMain, ContentSpan, ContentText, MainStyle} from "./styles.js";
import RickBackground from "../assets/images/rick-background.png";
import {LetreroRM} from "../assets/images/icons.jsx";

export const Main = () => {
    return (
        <MainStyle>
            <div>
                <img src={RickBackground} alt=""/>
            </div>

           <ContentMain>
                <img src={LetreroRM} alt=""/>
                <ContentH1>Bem-vindos ao <ContentSpan>consumo de API</ContentSpan> do Rick and Morty</ContentH1>
                <ContentText>Aqui você encontra informações sobre os personagens de Rick and Morty.</ContentText>
                <ContentBtn>
                    <Button href='' primary>Veja agora</Button>
                    <Button href=''>Saiba mais</Button>
                </ContentBtn>
           </ContentMain>
        </MainStyle>
    )
}