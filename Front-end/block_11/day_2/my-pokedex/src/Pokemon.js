import React from 'react';

class Pokemon extends React.Component {
  render () {
    const properties = this.props;
    const { name, type, averageWeight, image } = properties.pokemons;
    return (
        <div>
            <img src={image} alt={`${name}`} />
            <p>{name}</p>
            <p>{type}</p>
            <p>Average weight: {averageWeight.value}{averageWeight.measurementUnit}</p>
        </div>
    );
  }
}

export default Pokemon;
