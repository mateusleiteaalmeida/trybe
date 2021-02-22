
import React from 'react';
import './Dog.css';

class Dog extends React.Component {
  constructor(props){
    super(props);
		this.state = {
			dogImage: "",
		}
		this.getDog = this.getDog.bind(this);
		this.handleClick = this.handleClick.bind(this);
  }

	componentDidMount() {
		this.getDog();
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextState.dogImage.includes('terrier')){
			return false;
		} else {
			return true;
		}
	}

	componentDidUpdate() {
		const { dogImage } = this.state;
		localStorage.setItem('dogImageURL', dogImage);
		const dogBreed = dogImage.split('/')[4];
		alert(dogBreed);
	}
	getDog(){
		fetch('https://dog.ceo/api/breeds/image/random')
		.then(response => response.json())
		.then(data => this.setState({ dogImage: data.message }));
	}

	handleClick(){
		this.getDog();
	}

  render() {
		const { dogImage } = this.state;
		if (dogImage === "") return <p>Loading...</p>;
		return (
			<div className="dog-container">
				<img src={ dogImage } alt="Dog" className="dog-image"/>
				<button
					className="next-button"
					type="button"
					onClick={ this.handleClick }
				>Buscar novamente</button>
			</div>
		)
  }
}

export default Dog;