    

import React from "react";
import axios from "axios";

export default class App extends React.Component {
  state = {
    pokemons: [],
    picture: "",
    // pokeName: ""
  };

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    );
    this.setState({ pokemons: response.data.results });
    console.log(response.data.results);
  };

  //usando a url que vem da requisição

  getPicture = async (event) => {
    try {
      const url = event.target.value;
      const response = await axios.get(`${url}`);
      console.log(response.data.sprites.front_default);
      this.setState({ picture: response.data.sprites.front_default });
    } catch (error) {
      console.log(error);
    }
  };

  // Guardando no estado
  // getPicture = async () => {
  //   try {
  //     const name = this.state.pokeName;
  //     const response = await axios.get(
  //       `https://pokeapi.co/api/v2/pokemon/${name}/`
  //     );
  //     console.log(response.data.sprites.front_default);
  //     this.setState({ picture: response.data.sprites.front_default });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // Guardando no estado 
  // handleSelectChange = (e) => {
  //   this.setState({ pokeName: e.target.value }, () => {
  //     this.getPicture();
  //   });
  // };

  render() {
    console.log(this.state.picture);
    const pokeList = this.state.pokemons.map((poke, i) => {
      // const id = poke.name + i
      return (
        <option key={poke.name} value={poke.url}>
          {poke.name}
        </option>
      );
    });

    // Guardando no estado
    // const pokeList = this.state.pokemons.map((poke) => {
    //   return <option value={poke.name}>{poke.name}</option>;
    // });

    return (
      <div className="App">
        <h1>Pokemons</h1>
        {/*Guardando no estado*/}
        {/* <select onChange={this.handleSelectChange}> */}
        <select onChange={this.getPicture}>
          <option>Selecione um pokemon</option>
          {pokeList}
        </select>
        {this.state.picture && (
          <img src={this.state.picture} alt={"foto do pokemon"} />
        )}
      </div>
    );
  }
}