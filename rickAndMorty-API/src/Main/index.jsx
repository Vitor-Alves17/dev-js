import {Button, MainStyle} from "./styles.js";

export const Main = () => {
    return (
        <MainStyle>
            <div>
                <img src="" alt=""/>
            </div>

            <div className="content-main">
                <img src="" alt=""/>
                <h1>Bem-vindos ao <span>consumo de API</span> do Rick and Morty</h1>
                <p>Aqui você encontra informações sobre os personagens de Rick and Morty.</p>
                <div className="container-btn-main">
                    <Button href='' primary>Veja agora</Button>
                    <Button href=''>Saiba mais</Button>
                </div>
            </div>
        </MainStyle>
    )
}