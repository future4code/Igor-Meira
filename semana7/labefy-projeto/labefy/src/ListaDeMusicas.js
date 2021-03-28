import React from "react";
import axios from "axios"
import { axiosConfig, baseUrl } from "./Parametros";

export default class ListaDeMusicas extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount() {
        this.getAllPlaylists()
    }

    getAllPlaylists = () => {
        axios.get (baseUrl, axiosConfig)
        .then((res) =>{
            this.setState({playlists: res.data})
        })
        .catch((err) =>{

        })
    }

    deletePlaylist = (id) => {
        if (window.confirm('Deseja mesmo deletar a playlist?')){
            axios.delete(`${baseUrl}/${id}`, axiosConfig)
            .then((res) =>{
                this.getAllPlaylists()
            })
            .catch((err) =>{
    
            })
        }
    }

    render () {
        return (
            <div>
                <h2>Playlists</h2>
                {this.state.playlists.map ((nome) => {
                    return (
                        <div key={nome.id}>
                            <p>{nome.name}</p>
                            <button onClick={ () => this.deletePlaylist(this.nome.id)}>Deletar</button>
                        </div>
                    )
                })}
            </div>
        );
    };
}