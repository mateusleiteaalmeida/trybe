import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

// arquivo App.test.js pode servir de exemplo
describe('Teste da aplicação, testando o botão e sua funcionalidade', () => {
  test('Verificando se o botão está na tela e se o ele contém o texto "Adicionar"', () => {
    const { getByText } = render(<App />);
		const buttonAdd = getByText("Adicionar");
		expect(buttonAdd).toBeInTheDocument();
		expect(buttonAdd.type).toBe("button");
  });

  test(`Ao clicar no botão, é necessário adicionar o que o usuário digitou à lista`, () => {
    // Use os fireEvent, para simular a digitação do usuário e o clique.
    const { getByLabelText, queryByText } = render(<App />);
		const newTodo = "Estudar RTL";
		const input = getByLabelText("Tarefa:");
		const button = queryByText("Adicionar");
		fireEvent.change(input, { target: { value: newTodo }});
		expect(queryByText(newTodo)).not.toBeInTheDocument();
		fireEvent.click(button);
		expect(queryByText(newTodo)).toBeInTheDocument();
  });
});
