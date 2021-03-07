import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';
import Item from '../Item';

afterEach(cleanup);

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    const { getByLabelText, getByText } = render(<App />) // Caso precise de uma nova query adicione no object destructuring
		const input = getByLabelText("Tarefa:");
		const buttonAdd = getByText("Adicionar");
		listTodo.forEach((todo) => {
			fireEvent.change(input, { target: { value: todo } })
			fireEvent.click(buttonAdd);
		})
		listTodo.forEach((todo) => {
			expect(getByText(todo)).toBeInTheDocument();
		})
  })
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
		const string = 'RTL';
    const { getByText } = render(<Item content={string}/>);
		const getString = getByText(string);
		expect(getByText(string)).toBeInTheDocument();
  })
})
