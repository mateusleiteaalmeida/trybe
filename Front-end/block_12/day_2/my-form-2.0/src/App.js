import { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My Form</h1>
        <form>

          <label>
            Nome
            <input name="name" maxLength="40" required>
            </input>
          </label>

          <label>
            Email
            <input name="email" maxLength="50" required>
            </input>
          </label>

          <label>
            CPF
            <input name="cpf" maxLength="11" required>
            </input>
          </label>

          <label>
            Endereço
            <input name="adress" maxLength="200" required>
            </input>
          </label>

          <label>
            Cidade
            <input name="city" maxLength="28" required>
            </input>
          </label>

          <label>
            Estado
            <input name="state" required>
            </input>
          </label>

          <label>
            Tipo da residência
            <input type="radio">
              <label>Casa</label>
            </input>
            <input type="radio">
              <label>Apartamento</label>
            </input>
          </label>

        </form>
      </div>
    )
  }
}

export default App;
