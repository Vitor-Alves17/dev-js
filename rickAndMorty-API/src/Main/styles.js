import {styled, Styled} from "styled-components";
import {Colors} from "../styles/util/variables.js";


export const MainStyle = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 191px;
    background-color: ${Colors.colorBlack};
    padding: 100px 0;
`

export const ContantMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

export const ContentH1 = styled.h1`
    font-size: 40px;
    font-weight: bold;
    color: ${Colors.colorWhithe};
`

export const ContentSpan = styled.span`
color: ${Colors.colorPrimary};`

export const ContentText = styled.p`
    color: ${Colors.colorWhithe};
    font-size: 20px
`
export const ContentBtn = styled.div`
    
`

export const Button = styled.a`
    border-radius: 10px;
    padding: 15px 20px;
    background-color: ${props => props.primary ? Colors.colorPrimary : Colors.colorBlack};
    color: ${props => props.primary ? Colors.colorWhithe : Colors.colorPrimary};
    border: ${props => props.primary ? 'none' : Colors.colorPrimary};
`