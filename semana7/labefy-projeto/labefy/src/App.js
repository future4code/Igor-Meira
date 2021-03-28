import React from "react";
import CriaPlaylist from "./CriaPlaylist"
import ListaDeMusicas from "./ListaDeMusicas"
import styled from "styled-components"

export default class App extends React.Component {
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

    const App = styled.div`
        color: blue;
    `

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