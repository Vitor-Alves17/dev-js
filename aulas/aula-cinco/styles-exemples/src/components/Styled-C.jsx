import styled from 'styled-components'

const Buttone = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aqua;
    border: solid 1px aqua;
    border-radius: 10px ;
    padding: 10px;
`

export default function Style_c() {
    return (
        <>
          <Buttone>Divos esquecidos</Buttone>
        </>
    )
}