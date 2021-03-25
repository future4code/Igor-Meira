import React from 'react';
import axios from 'axios';
import { axiosConfig, baseUrl } from '../Parametros';

export default class UsersListPage extends React.Component {
    state = {
        users: []
    }

    componentDidMount() { 
        this.getAllUsers ()
    }

    getAllUsers = () => {
        axios.get (baseUrl, axiosConfig)
        .then ((res) => {
            this.setState ({users: res.data})
        })
        .catch ((err) => {
            console.log(err)
        })

    }

    deleteUser = (id) => {
        axios.delete (`${baseUrl}/${id}`, axiosConfig)
        .then((res) => {
            alert("Usuário deletado com sucesso!")
            this.getAllUser()
            //console.log(res)
        })
        .catch((err) =>{
            //console.log(err)
        })
    }

    render () {
        return (
            <div>
                <h2>Lista de Usuários</h2>
                {this.state.users.map((user) => {
                        return(
                            <div key={user.id}>
                                <p>{user.name}</p>
                                <button onClick={() => this.deleteUser(user.id)}>Deletar</button>
                            </div>

                        )
                })}
            </div>
        )
    }
}