import React, { Component } from 'react';

class App extends Component {
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
              <input name="adress" maxLength="200" required />
            </label>

            <label>
              Cidade
              <input name="city" maxLength="28" required />
            </label>

            <label>
              Estado
              <input name="state" required />
            </label>

            <label>
              Tipo da residência
              <input type="radio" />
                <label>Casa</label>
              <input type="radio" />
                <label>Apartamento</label>
            </label>

          </fieldset>
        </form>
      </div>
    )
  }
}

export default App;
