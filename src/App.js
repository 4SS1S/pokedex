import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonCard from './components/pokemon_card';


const APP_JSON = "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json"; 

class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      pokemons: [],
      isLoading: false
    };
  }

  componentDidMount()
  {

    this.setState({ isLoading: true });

    fetch(APP_JSON)
      .then(response => response.json())
      .then(json => this.setState({
        pokemons: json,
        isLoading: false
      }))

  }

  render() {
    
    const { pokemons, isLoading } = this.state;

    if (isLoading) {
      return <p class="loading">Loading ...</p>;
    }

    return (
      <div className="App">
        <ul>
          {pokemons.map(items =>(
            <li><PokemonCard pokemon={items}></PokemonCard></li>
          ))} 
        </ul> 
      </div>
    );
  }
}

export default App;
