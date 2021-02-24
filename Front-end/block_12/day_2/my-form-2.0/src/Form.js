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

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        cpf: '',
        address: '',
        city: '',
        countryState: '',
        residenceType: '',
        resume: '',
        position: '',
        positionDescription: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.validateCity = this.validateCity.bind(this);
    this.saveContent = this.saveContent.bind(this);
    this.clearContent = this.clearContent.bind(this);
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

  saveContent(){
    const {
      name,
      email,
      cpf,
      address,
      city,
      countryState,
      residenceType,
      resume,
      position,
      positionDescription
    } = this.state;
    const div = document.querySelector('.saved-content');
    div.innerHTML = `
    Nome: ${name}
    Email: ${email}
    CPF: ${cpf}
    Endereço: ${address}
    Cidade: ${city}
    Estado: ${countryState}
    Tipo da residência: ${residenceType}
    Currículo: ${resume}
    Cargo: ${position}
    Descrição do cargo: ${positionDescription}
    `
  }

  clearContent(){
    this.setState({
        name: '',
        email: '',
        cpf: '',
        address: '',
        city: '',
        countryState: '',
        residenceType: '',
        resume: '',
        position: '',
        positionDescription: '',
    })
    const div = document.querySelector('.saved-content');
    div.innerHTML = "";
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
              value={this.state.email}
              maxLength="50"
              required
              onChange={this.handleChange}
              />
            </label>

            <label>
              CPF
              <input
              name="cpf"
              value={this.state.cpf}
              maxLength="11"
              required
              onChange={this.handleChange}
              />
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
              value={this.state.city}
              maxLength="28"
              onBlur={this.validateCity}
              onChange={this.handleChange}
              required />
            </label>

            <label>
              Estado
              <select
              name="countryState"
              value={this.state.countryState}
              required
              onChange={this.handleChange}>
                {states.map(state => {
                  return (<option>{state}</option>)
                })}
              </select>
            </label>

            <label>
              Tipo da residência
              <input 
              name="residenceType"
              value="Casa"
              type="radio"
              onChange={this.handleChange}
              />
                <label>Casa</label>
              <input 
              name="residenceType"
              value="Apartamento"
              type="radio"
              onChange={this.handleChange}
              />
                <label>Apartamento</label>
            </label>

          </fieldset>
          
          <fieldset>
            <label>
              Currículo
              <textarea
              name="resume"
              value={this.state.resume}
              maxLength="1000"
              onMouseEnter={this.throwWarning}
              required
              onChange={this.handleChange}
              />
            </label>

            <label>
              Cargo
              <textarea
              name="position"
              value={this.state.position}
              maxLength="40"
              required
              onChange={this.handleChange}
              />
            </label>

            <label>
              Descrição do cargo
              <textarea
              name="positionDescription"
              value={this.state.positionDescription}
              maxLength="500"
              required
              onChange={this.handleChange}
              />
            </label>
          </fieldset>
        </form>
        <button
          type="button"
          onClick={this.saveContent}
        >
          Enviar formulário
        </button>
        <button
          type="button"
          onClick={this.clearContent}
        >
          Limpar formulário
        </button>
        <div className="saved-content"></div>
      </div>
    )
  }
}

export default Form;