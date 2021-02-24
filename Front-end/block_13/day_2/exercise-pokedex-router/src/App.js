import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import About from './About';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
			<Switch>
				<Route exact path="/" component={() => <Pokedex pokemons={ pokemons }/>} />
				<Route path="/pokemons/:id" component={ PokemonDetails } />
				<Route path="/about" component={ About } />
				<Route component={ NotFound } />
			</Switch>
		</BrowserRouter>
  );
}

export default App;