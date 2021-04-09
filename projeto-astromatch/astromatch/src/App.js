import React, { useState, useEffects } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { AplicativoInicial } from './components/Aplicativo'

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

const App = () => {
  return (

    <ContainerPrincipal>

<AplicativoInicial />

    </ContainerPrincipal>
    
  );
}

export default App;
