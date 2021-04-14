import React from 'react';
import { useHistory } from 'react-router-dom';

const ApplicationFormPage = () => {
    const history = useHistory ()

    return (
    <>
    <p>formulario de aplicação</p>
    
    <button onClick={history.goBack}>voltar</button>
    </>
    )
}

export default ApplicationFormPage