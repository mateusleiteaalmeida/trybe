import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pokemonIndex: 0,
        }
        this.handleNextButton = this.handleNextButton.bind(this);
    }

    handleNextButton(){
        const { pokemonIndex } = this.state;
        const { pokemons } = this.props;
        if (pokemonIndex !== pokemons.length - 1) {
            this.setState(previousState => ({
                pokemonIndex: previousState.pokemonIndex + 1,
            }))
        } else {
            this.setState({
                pokemonIndex: 0,
            })
        }
    }

    render() {
        const { pokemons } = this.props;
        const actualPokemon = pokemons[this.state.pokemonIndex]
        return (
            <div className="pokedex">
                <Pokemon pokemon={actualPokemon} />
            <button
                type="button"
                onClick={this.handleNextButton}
            >Next</button>
            </div>
        );
    }
}

export default Pokedex;