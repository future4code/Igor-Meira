import React from 'react';
import { useHistory } from 'react-router-dom';

const AdminHomePage = () => {
    const history = useHistory ()

    const goToLoginPage = () => {
        history.push('/paginadelogin')
    }
    return (
    <>
    <p>Página ADM</p>
    <button onClick={goToLoginPage}>login</button>
    <button onClick={history.goBack}>voltar</button>
    </>
    )

}

export default AdminHomePage