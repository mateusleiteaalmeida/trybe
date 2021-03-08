import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header';

class Home extends Component {
  render() {
    return (
      <div className="Home">
				<Header />
					<h1>Home</h1>
					<img src={logo} className="Home-logo" alt="logo" />
					<h1>Meu portifólio</h1>
			</div>
    );
  }
}

export default Home;