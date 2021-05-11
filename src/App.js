import React from 'react';
import SearchBox from './components/SearchBox/searchbox.component';
import CardList from './components/CardList/cardList.component';
import './App.css';
import loader from './loader.svg';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    this.fetchKantoPokemon();
  }

  fetchKantoPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const pokemons = await response.json();
    const pokeData = await pokemons.results.map(pokemon => this.fetchPokemonData(pokemon));
    const pokeArray = await Promise.all(pokeData);
    const pokePartialData = pokeArray.map((poke, i) => {
      return pokeArray[i] = {
        id: poke.id,
        name: poke.name,
        types: poke.types
      }
    })
    this.setState({ pokemons: pokePartialData });
  }

  fetchPokemonData = async (pokemon) => {
    const response = await fetch(pokemon.url);
    const pokeData = await response.json();
    return pokeData;
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const { pokemons, searchfield } = this.state;
    const filteredPokemons = pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchfield.toLowerCase())
    });
    return !pokemons.length ?
      (
        <div className="App loading">
          <h1>Loading</h1>
          <img alt='loading' src={loader} />
          <img alt='loading' src={loader} />
          <img alt='loading' src={loader} />
        </div>
      )
        :   
      (
        <div className="App">
          <h1>Pokemon</h1>
          <SearchBox searchField={searchfield} searchChange={this.onSearchChange} />
          <CardList pokemons={filteredPokemons} />
        </div>
      );
  }
}

export default App;
