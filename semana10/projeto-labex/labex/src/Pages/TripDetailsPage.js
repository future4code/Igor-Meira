import React from 'react';
import { useHistory } from 'react-router-dom';

const TripDetailsPage = () => {
    const history = useHistory ()
    return (
    <>
    <p>detalhes viagens</p>
    <button onClick={history.goBack}>voltar</button>
    </>
    )
}

export default  TripDetailsPage 