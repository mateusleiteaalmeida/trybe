import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css';

class Pokedex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pokemonIndex: 0,
            pokemonsType: 'Fire',
        }
        this.handleNextButton = this.handleNextButton.bind(this);
        this.handleTypeButton = this.handleTypeButton.bind(this);
    }

    handleNextButton(){
        const { pokemons } = this.props;
        const { pokemonIndex, pokemonsType } = this.state;
        const filteredPokemons = pokemons.filter((pokemon) => pokemon.type === pokemonsType)
        if (pokemonIndex !== filteredPokemons.length - 1) {
            this.setState(previousState => ({
                pokemonIndex: previousState.pokemonIndex + 1,
            }))
        } else {
            this.setState({
                pokemonIndex: 0,
            })
        }
    }

    handleTypeButton({ target }){
        this.setState({pokemonsType: target.value})
    }

    render() {
        const { pokemons } = this.props;
        const { pokemonsType } = this.state;
        const filteredPokemons = pokemons.filter((pokemon) => pokemon.type === pokemonsType)
        const actualPokemon = filteredPokemons[this.state.pokemonIndex]
        return (
            <div className="pokedex">
                <Pokemon pokemon={actualPokemon} />
            <div>
                <button
                    className="fire-button"
                    type="button"
                    value="Fire"
                    onClick={this.handleTypeButton}
                >
                    Fire
                </button>
                <button
                    className="psychic-button"
                    type="button"
                    value="Psychic"
                    onClick={this.handleTypeButton}
                >
                    Psychic
                </button>
            </div>
            <button
                className="next-button"
                type="button"
                onClick={this.handleNextButton}
            >Next Pokémon
            </button>
            </div>
        );
    }
}

export default Pokedex;