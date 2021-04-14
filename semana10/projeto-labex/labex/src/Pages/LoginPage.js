import React from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const history = useHistory ()
    return (
    <>
    <p>login</p>
    <button onClick={history.goBack}>voltar</button>
    </>
    )
}

export default LoginPage