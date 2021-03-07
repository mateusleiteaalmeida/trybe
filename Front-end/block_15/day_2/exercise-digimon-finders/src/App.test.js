import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Teste da aplicação toda', () => {

	afterEach(() => jest.clearAllMocks());

  test('if App renders', async () => {
    const { getByText, getByTestId } = render(<App />);
		const linkElement = getByText(/Search Digimon/i);
		const makeASearch = getByText(/Faça uma pesquisa/i);

		expect(linkElement).toBeInTheDocument();
		expect(makeASearch).toBeInTheDocument();

		const searchInput = getByTestId('input')
		expect(searchInput).toHaveTextContent('')

  });

	test('if input value changes', async () => {
		const { getByTestId } = render(<App />);

		const input = getByTestId('input');
		expect(input).toHaveValue('');

		fireEvent.change(input, { target: { value: 'Agumon' } });
		expect(input).toHaveValue('Agumon');
  });

	test('if there is no digimon on the screen', async () => {
		const { queryByTestId } = render(<App />);

		const digimonNameField = queryByTestId('digimonName');
		expect(digimonNameField).toBeNull();
  });

	test('if searches for a digimon that exists', async () => {
		const digimon = [{
			name: 'Agumon',
			level: 'Rookie',
			img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
		}];

		const fetchApi = global.fetch = jest.fn(async () => ({
			json: async () => digimon,
		}));

		const { getByTestId, findByText, getByAltText } = render(<App />);

		const input = getByTestId('input');
		expect(input).toHaveValue('');

		fireEvent.change(input, { target: { value: 'Agumon' } });
		expect(input).toHaveValue('Agumon');

		const button = getByTestId('buttonSearch');
		expect(button).toBeInTheDocument();
		fireEvent.click(button);

		await findByText('level: Rookie');
		expect(getByTestId('digimonName')).toBeInTheDocument();
		expect(getByAltText('Agumon')).toBeInTheDocument();

		expect(fetchApi).toBeCalledTimes(1);
		expect(fetchApi).toBeCalledWith(
			'https://digimon-api.vercel.app/api/digimon/name/Agumon'
		);
  });

test('if searches for a digimon that does not exist', async () => {
	const ErrorMsg = 'A is not a Digimon in our database.';

	const fetchApi = global.fetch = jest.fn(async () => ({
		json: async () => ({ ErrorMsg }),
	}));

	const { getByTestId, findByText } = render(<App />);

	const input = getByTestId('input');
	expect(input).toHaveValue('');

	fireEvent.change(input, { target: { value: 'Teste' } });
	expect(input).toHaveValue('Teste');

	const button = getByTestId('buttonSearch');
	expect(button).toBeInTheDocument();
	fireEvent.click(button);

	await findByText('A is not a Digimon in our database.');

	expect(fetchApi).toBeCalledTimes(1);
	expect(fetchApi).toBeCalledWith(
		'https://digimon-api.vercel.app/api/digimon/name/Teste'
	);
  });

test('if search input is empty, no fetch is executed', async () => {
	const { getByTestId } = render(<App />);

	const input = getByTestId('input');
	expect(input).toHaveValue('');

	fireEvent.change(input, { target: { value: '' } });
	expect(input).toHaveValue('');

	const button = getByTestId('buttonSearch');
	expect(button).toBeInTheDocument();
	fireEvent.click(button);

	expect(global.fetch).toBeCalledTimes(0);
	});
});
