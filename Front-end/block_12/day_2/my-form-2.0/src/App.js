import React, { Component } from 'react';

class App extends Component {
constructor(props) {
  super(props);
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

  render() {
    return (
      <div>
        <h1>My Form</h1>
        <form>
          <fieldset>
            <label>
              Nome
              <input name="name" maxLength="40" required />
            </label>

            <label>
              Email
              <input name="email" maxLength="50" required />
            </label>

            <label>
              CPF
              <input name="cpf" maxLength="11" required />
            </label>

            <label>
              Endereço
              <input name="address" maxLength="200" required />
            </label>

            <label>
              Cidade
              <input name="city" maxLength="28" required />
            </label>

            <label>
              Estado
              <input name="countryState" required />
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
              <textarea name="resume" maxLength="1000" required />
            </label>

            <label>
              Cargo
              <textarea name="position" maxLength="40" required />
            </label>

            <label>
              Descrição do cargo
              <input name="positionDescription" maxLength="500" required />
            </label>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default App;
