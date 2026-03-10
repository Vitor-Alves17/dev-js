import styled from 'styled-components';

const StyledBtn = styled.button`
    background-color: ${({secundario}) => (secundario ? "yellow" : "blue")};
    border: 10px;
`

export default function ButtonStyled({secondarily: secondarily, text}) {
    return (
        <>
            <StyledBtn secundario={secondarily}>
                {text}
            </StyledBtn>
        </>
    )
}