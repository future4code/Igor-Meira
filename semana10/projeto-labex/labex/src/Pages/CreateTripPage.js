import React from 'react';
import { useHistory } from 'react-router-dom';

const CreateTripPage = () => {
    const history = useHistory ()
    return (
    <>
    <p>criar viagem</p>
    <button onClick={history.goBack}>voltar</button>
    </>
    )
}

export default CreateTripPage