import {styled} from "styled-components";
import {Colors} from "../styles/util/variables.js";


export const CardCharcter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    text-align: center;
    gap: 11px;
    background-color: ${Colors.colorGBlack};
    border-radius: 20px;
    padding: 30px 20px;
    width: 293px;
    height: 422px;
    
    img {
        object-fit: cover;
        border-radius: 50px;
    }
`

export const CardTitle = styled.h3`
    font-size: 20px;
    font-weight: bold;
    color: ${Colors.colorWhithe};
    margin: 0 auto;
`

export const CardDescription = styled.div`
    
`
export const CardList = styled.ul`
    list-style: none;
    color: ${Colors.colorWhithe};
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const CardListItem = styled.li`
    display: flex;
    gap: 10px;
`