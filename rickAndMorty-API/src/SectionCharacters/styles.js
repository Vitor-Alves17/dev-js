import {styled} from "styled-components";
import {Colors} from "../styles/util/variables.js";

export const SectionChar = styled.section`
    background-color: ${Colors.colorLBlack};
`

export const Title = styled.h2`
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    color: ${Colors.colorWhithe};
`

export const SpanCharacters = styled.span`
    color: ${Colors.colorPrimary};
`

export const ContainerCardCharacter = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 118px;
    gap: 35px;
`