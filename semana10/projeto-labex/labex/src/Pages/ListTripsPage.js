import React from 'react';
import { useHistory } from 'react-router-dom';

const ListTripsPage = () => {
    const history = useHistory ()
    return (
    <>
    <p>lista de viagens</p>
    <button onClick={history.goBack}>voltar</button>
    </>
    )
}

export default ListTripsPage