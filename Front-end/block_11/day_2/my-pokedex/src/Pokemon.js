import React from 'react';
import PropTypes from 'prop-types'

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

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
