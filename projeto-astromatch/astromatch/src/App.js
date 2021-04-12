import React, { useState, useEffects } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { AplicativoInicial } from './Pages/Aplicativo'
import { TelaMatch } from './Pages/TelaDeMatch'

const ContainerPrincipal = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: flex-start;
background-color: violet;
margin: 15px;
margin-left: 35%;
width: 400px;
height: 90vh;
border-radius: 10px;
border: solid 1px black;
`

export default function App ()  {

  const resetaBusca = () => {
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear',)

    console.log('limpou')
  }
  
    return (
      <ContainerPrincipal>
          <h1>AstroMatch</h1>
            <AplicativoInicial />
            <TelaMatch />
            <button onClick={resetaBusca}>Resetar busca</button>
      </ContainerPrincipal>
      
    );
}


