
import React from 'react';

class Dog extends React.Component {
  constructor(props){
    super(props);
		this.state = {
			dogImage: "",
		}
		this.getDog = this.getDog.bind(this);
		this.handleClick = this.handleClick.bind(this);
  }

	componentDidMount(){
		this.getDog();
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
		return (
			<div>
				{ dogImage == "" ? <p>Loading...</p> : <img src="" className="dog-image"/>}
				<img src={ dogImage } className="dog-image"/>
				<button
					type="button"
					onClick={ this.handleClick }
				>Buscar novamente</button>
			</div>
		)
  }
}

export default Dog;