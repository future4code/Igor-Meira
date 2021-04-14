import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    const history = useHistory ()

    const goToListTripsPage = () => {
        history.push('/listadeviagens')
    }

    const goToAdminHomePage= () => {
        history.push('/paginadoadm')
    }

    return (
    <>
    <p>Home</p>
    <button onClick={goToListTripsPage}>lista de viagens</button>
    <button onClick={goToAdminHomePage}>pagina do adm</button>
    <button onClick={history.goBack}>voltar</button>
    </>
    
    )
}

export default HomePage