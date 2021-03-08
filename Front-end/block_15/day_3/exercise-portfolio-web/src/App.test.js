import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

function renderWithRouter(
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history,
  };
}

describe('test all pages', () => {

	test('renders home page', () => {
		const { getByText } = renderWithRouter(<App />);
		const home = getByText(/Meu portifólio/i);
		expect(home).toBeInTheDocument();
	});

	test('renders projects page', () => {
		const { getByText } = renderWithRouter(<App />);
		fireEvent.click(getByText(/Projetos/i));
		const myProjects = getByText(/Meus Projetos/i);
		expect(myProjects).toBeInTheDocument();
	});

	test('renders about page', () => {
		const { getByText } = renderWithRouter(<App />);
		fireEvent.click(getByText(/Sobre mim/i));
		const about = getByText(/Minha descrição/i);
		expect(about).toBeInTheDocument();
	});

	test('renders contact page', () => {
		const { getByText } = renderWithRouter(<App />);
		fireEvent.click(getByText(/Contato/i));
		const myContacts = getByText(/Meus contatos/i);
		expect(myContacts).toBeInTheDocument();
	});

	test('renders not found page', () => {
    const { getByText } = renderWithRouter(<App />, { route: '/some/bad/route' });
    const pageNotFound = getByText(/Página não encontrada/i);
    expect(pageNotFound).toBeInTheDocument();
	});
})