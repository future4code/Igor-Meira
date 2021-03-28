import React from "react";
import CriaPlaylist from "./CriaPlaylist"
import ListaDeMusicas from "./ListaDeMusicas"

export default class App extends React.Components {
    state = {
        page: 'criaPlaylist'
    }

    changePage = () => {
        if (this.state.page === 'criaPlaylist') {
        this.setState({page: 'listaDeMusicas'})
        } else if (this.state.page === 'listaDeMusicas') {
        this.setState({page: 'criaPlaylist'})
        }
    }
    
    renderPage = () => {
        switch (this.state.page) {
            case 'criaPlaylist': 
                return <CriaPlaylist />
            case 'listaDeMusicas':
                return <ListaDeMusicas />
            default:
                return <div></div>
        }
    }

    render () {
        return (
            <div className = "App">
                <h1>Labefy</h1>
                <button onClick={this.changePage}>Troca de Página</button>
                {this.renderPage()}
            </div>
        );
    };
}