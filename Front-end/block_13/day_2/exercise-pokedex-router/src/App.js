import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import About from './About';

function App() {
  return (
    <BrowserRouter>
			<Route exact path="/" component={() => <Pokedex pokemons={ pokemons }/>} />
			<Route path="/pokemons/:id" component={ PokemonDetails } />
			<Route path="/about" component={ About } />
		</BrowserRouter>
  );
}

export default App;