import React from 'react';
import { useHistory } from 'react-router-dom';

const ErrorPage = () => {
    const history = useHistory ()
    return (
    <>
    <p>Erro</p>
    <button onClick={history.goBack}>voltar</button>

    </>
    )
}

export default ErrorPage