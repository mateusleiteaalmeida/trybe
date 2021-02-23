import React from 'react';
import { Link } from 'react-router-dom';
import './pokemon.css';

class Header extends React.Component {
  render() {
		return (
			<div className="header">
				<Link to={"/"}>
					Pokédex
				</Link>
				<Link to={"/about"}>
					Sobre a Pokédex
				</Link>
			</div>
    );
  }
}

export default Header;