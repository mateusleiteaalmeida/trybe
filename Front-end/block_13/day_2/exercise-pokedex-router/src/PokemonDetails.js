import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';


class PokemonDetails extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			pokemon: undefined,
			loading: true,
		}
		this.findPokemon = this.findPokemon.bind(this);
	}

	async componentDidMount(){
		await this.findPokemon();
		console.log(this.state.pokemon)
	}

	findPokemon() {
		const { id } = this.props.match.params;
		const selectedPokemon = pokemons.find((pokemon) => pokemon.id === Number(id));
		this.setState({
			pokemon: selectedPokemon,
			loading: false,
		});
	}

  render() {
		const { pokemon, loading } = this.state;
		if (loading) return <p>Loading...</p>
		const { name, type, averageWeight, image, summary, foundAt } = pokemon;
		return (
			<div>
				<div className="pokemon-details">
					<h1>Pokemon Details</h1>
						<p>{name}</p>
						<p>{type}</p>
						<p>
							Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
						</p>
					<img src={image} alt={`${name} sprite`} />
					<p>{summary}</p>
					<h3>Locations:</h3>
					<div className="location-container">
						{foundAt.map((element) => {
							return (
								<div className="location-map">
									<img src={element.map} className="map"/>
									<p className="location">{element.location}</p>
								</div>
							)
						})}
					</div>
				</div>
			</div>
    );
  }
}

export default PokemonDetails;