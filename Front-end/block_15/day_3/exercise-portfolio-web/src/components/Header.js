import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
					<Link to="/">Home</Link>
					<Link to="/projetos">Projetos</Link>
					<Link to="/contato">Contato</Link>
					<Link to="/sobre">Sobre mim</Link>
			</div>
    );
  }
}

export default Home;
