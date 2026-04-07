import {styled} from 'styled-components'
import {Colors} from "../styles/util/variables.js";


export const HeaderR = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    background-color: ${Colors.colorPrimary};
    padding: 10px 0;
`
export const HeaderWrapperA = styled.a`
    display: flex;
    align-items: center;
    gap: 15px;
    color: ${Colors.colorBlack};
`
export const HeaderASpan = styled.span`
    font-size: 20px;
    font-weight: bold;
`