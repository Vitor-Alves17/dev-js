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

const Card = styled.div`
    background-color: aliceblue;
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
    return (
        <>
            <Card>
                <p>Veja nossos produtos</p>
                <Buttone>Divos esquecidos</Buttone>
            </Card>
        </>
    )
}