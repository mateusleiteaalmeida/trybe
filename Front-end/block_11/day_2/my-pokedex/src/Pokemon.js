import React from 'react';

class Pokemon extends React.Component {
  render () {
    const properties = this.props;
    const { name, type, averageWeight, image } = properties.pokemon;
    return (
        <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>{averageWeight.value}{averageWeight.measurementUnit}</p>
            <img src={image} alt="" />
        </div>
    );
  }
}

export default Pokemon;
