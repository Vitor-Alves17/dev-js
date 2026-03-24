import styled from 'styled-components'
import {useState} from "react";

const Sel = styled.select`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aqua;
    border: solid 1px aqua;
    border-radius: 10px ;
    padding: 10px;
`



const Op = styled.option`
    background-color: ${props => props.color};
`

const Card = styled.div`
    background-color: ${props => props.color};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 20px;
    border: solid 1px black;
    border-radius: 10px;
    padding: 30px;
    width: fit-content;
`

export default function Style_c() {
    const [color, setColor] = useState('')

    return (
        <>
            <Card color={color}>
                <p>Escolha uma cor</p>

                {/*usetate tem que ser criado dentro de um recat components, pra usar ele no styles em outro lugar fora desse react components, usamos props para atribuir o valor)*/}

                <Sel>
                    <Op color={color} onClick={() => setColor('red')}>{'Red'}</Op>
                    <Op color={color} onClick={() => setColor('blue')}>{'Blue'}</Op>
                    <Op color={color} onClick={() => setColor('green')}>{'Green'}</Op>
                </Sel>
            </Card>
        </>
    )
}