import {HeaderASpan, HeaderR, HeaderWrapperA} from "./styles.js";
import {LogoGitHub} from "../assets/images/icons.jsx";


export const Header = () => {
    return (
        <>
            <HeaderR>
                <div className="header-wrapper">
                    <HeaderWrapperA>
                        <LogoGitHub></LogoGitHub>
                        <HeaderASpan>Vitor-Alves17</HeaderASpan>
                    </HeaderWrapperA>
                </div>
            </HeaderR>
        </>
    )
}