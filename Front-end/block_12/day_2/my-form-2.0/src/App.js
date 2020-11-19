import React, { Component } from 'react';

const states = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins'
]

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.validateCity = this.validateCity.bind(this);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
      resume: '',
      position: '',
      positionDescription: '',
    }
  }

  handleChange({ target }) {
    let { name, value } = target;
    if (name === 'name') value = value.toUpperCase()
    if (name === 'address') value = value.replace(/[^\w\s]/gi, '')
    this.setState({ [name]: value });
  }

  validateCity(event) {
    let { name, value } = event.target;
    if(name === 'city') value = value.match(/^\d/) ? '' : value
    this.setState({ [name]: value });
  }

  throwWarning() {
    alert('Preencha com cuidado esta informação')
  }

  render() {
    return (
      <div>
        <h1>My Form</h1>
        <form>
          <fieldset>
            <label>
              Nome
              <input
              name="name"
              value={this.state.name}
              maxLength="40"
              required
              onChange={this.handleChange} />
            </label>

            <label>
              Email
              <input
              name="email"
              maxLength="50"
              required
              onChange={this.handleChange} />
            </label>

            <label>
              CPF
              <input 
              name="cpf"
              maxLength="11"
              required />
            </label>

            <label>
              Endereço
              <input
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
              maxLength="200"
              required />
            </label>

            <label>
              Cidade
              <input
              name="city"
              maxLength="28"
              onBlur={this.validateCity}
              required />
            </label>

            <label>
              Estado
              <select
              name="countryState"
              required
              onChange={this.handleChange}>
                {states.map(state => {
                  return (<option>{state}</option>)
                })}
              </select>
            </label>

            <label>
              Tipo da residência
              <input type="radio" />
                <label>Casa</label>
              <input type="radio" />
                <label>Apartamento</label>
            </label>

          </fieldset>
          
          <fieldset>
            <label>
              Currículo
              <textarea
              name="resume"
              maxLength="1000"
              onMouseEnter={this.throwWarning}
              required />
            </label>

            <label>
              Cargo
              <textarea
              name="position"
              maxLength="40"
              required />
            </label>

            <label>
              Descrição do cargo
              <input
              name="positionDescription"
              maxLength="500"
              required />
            </label>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default App;
