import React from 'react';
import { connect } from 'react-redux';
import { addRegister } from '../actions';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  validateRegister = () => {
    const { name, age, email } = this.state;
    this.props.addRegister({ name, age, email });
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  };

  render() {
    const { name, age, email } = this.state;
    const { userLogin } = this.props;
    if (!userLogin.email) return <div>Login não efetuado!</div>;
    return (
      <div>
        <div>
					<label>
						Nome
						<input
							type="text"
							placeholder="Digite o nome"
							value={name}
							onChange={e => this.setState({ name: e.target.value })}
						/>
					</label>
					<br/>
					<br/>
					<label>
						Idade
						<input
							type="number"
							placeholder="Digite a idade"
							value={age}
							onChange={e => this.setState({ age: e.target.value })}
						/>
					</label>
					<br/>
					<br/>
					<label>
						Email
						<input
							type="text"
							placeholder="Digite o email"
							value={email}
							onChange={e => this.setState({ email: e.target.value })}
						/>
					</label>
        </div>
				<br/>
        <button onClick={this.validateRegister}>Registrar Cliente</button>
				<br/>
				<br/>
        <Link to="/clients">Ver clientes cadastrados</Link>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userLogin: state.loginReducer});

const mapDispatchToProps = dispatch => ({
  addRegister: e => dispatch(addRegister(e))});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
