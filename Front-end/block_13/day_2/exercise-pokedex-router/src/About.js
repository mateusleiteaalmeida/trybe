import React from 'react';
import './pokemon.css';

class About extends React.Component {
  render() {
		return (
			<div className="pokedex-text">
				<h1>About Pokédex</h1>
				<p>
					The Pokédex is a digital encyclopedia created by Professor Oak as an invaluable tool to Trainers in the Pokémon world. It gives information about all Pokémon in the world that are contained in its database, although it differs in how it acquires and presents information over the different media. However, they are also only given to a few Trainers at a time, generally to the ones that are felt to have exceptional potential and skill. Regional Pokédexes give information about Pokémon native to its particular region, while the National Pokédex records information about all known Pokémon.
					<br />
					<br />
					Pokédex entries typically describe a Pokémon in only two or three sentences. They may give background information on the habitat or activities of a Pokémon in the wild or other information on the Pokémon's history or anatomy. Pokédex entries also include height, weight, cry, footprint (prior to Generation VI), location, other forms, and a picture of the Pokémon.
					<br />
					<br />
					Sometimes the Pokédex might contain inaccurate or mythical information. For example, some of Tentacruel's entries describes it as having 80 tentacles when only 14 are visible.
				</p>
			</div>
    );
  }
}

export default About;