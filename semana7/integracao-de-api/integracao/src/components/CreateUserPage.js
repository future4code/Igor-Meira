import React from 'react';
import axios from 'axios'
import { axiosConfig, baseUrl } from '../Parametros';

export default class CreateUserPage extends React.Component {
    state = {
        name: ' ',
        email: ' '
    }

    handleName = (event) => {
        this.setState ({name: event.target.value})
    }

    handleEmail = (event) => {
        this.setState ({email: event.target.value})
    }

    createUser = (event) => {
        const body = {
            name: this.state.name,
            email: this.state.email
        }

        axios.post(baseUrl, body, axiosConfig)
            .then((res) => {
                //console.log(res)
            alert('O usuário foi criado com sucesso!')
                this.setState({name: ' ', email: ' '})
            }).catch((err) => {
            alert('Não foi possível cadastrar o usuário.')
                //console.log(err)
            })
    }
 
    render() {
        return (
            <div>
                <h2>Criar Usuário</h2>
                    <input onChange={this.handleName} value={this.state.name}
                    placeholder= "Nome"/>
                    <input onChange={this.handleEmail} value={this.state.email} 
                    placeholder= "E-mail"/>
                <button onClick={this.createUser}>Criar</button>
            </div>
        )   
    }   
}