import './App.css';
import CreateUserPage from './components/CreateUserPage';
import UsersListPage from './components/UsersListPage';
import React from "react"

export default class App extends React.Component {
  state = {
    page: 'createUser'
  }

  changePage = () => {
    if (this.state.page === 'createUser') {
      this.setState({page: 'usersList'})
      
    } else if ( this.state.page === 'usersList') {
      this.setState({page: 'createUser'})
    }
  }

  renderPage = () => {
    switch (this.state.page) {
      case 'createUser':
        return <CreateUserPage/>
      case 'usersList':
        return <UsersListPage/>
      default:
        return <div></div>
    }
  }

  render() {
  return (
      <div className="App">
        <h1>Labensers</h1>
          <button onClick={this.changePage}>Trocar de Página</button>
           {this.renderPage()}
     </div>
  );
}

}