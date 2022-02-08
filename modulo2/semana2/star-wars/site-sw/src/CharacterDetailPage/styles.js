import styled from 'styled-components'

const CharacterContainer = styled.div`
    width: 100px;
    height: 150px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: end;
    p {
        margin: 0;
    }

`

export const CharacterCard = () => {
    return (
        <CharacterContainer >
            <h3>Personagem</h3>
        </CharacterContainer>
    )
}