import React from "react";
import axios from "axios";
import { axiosConfig, baseUrl } from "./Parametros"

export default class CriarPlaylist extends React.Component {
    state = {
        nome: "",
    }

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    createPlaylist = () => {
        const body ={
            name: this.state.nome,
        }
        axios.post (baseUrl, body, axiosConfig)
        .then((res) => {
            this.setState({nome: ' '})
            alert("Playlist criada com sucesso.")
        })
        .catch((err) => {
            alert("Não foi possível criar uma nova Playlist.")
        })
    }

    render () {
        return (
            <div>
                <h2>Criar Playlist</h2>
                <input onChange={this.handleNome} value = {this.state.nome} 
                    placeholder="Nome da Playlist" />
                <button onClick={this.createPlaylist}>Criar</button>
            </div>
        );
    };
}
