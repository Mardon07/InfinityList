import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders App component with heading and ItemList', async () => {
  render(<App />);


  const headingElement = await screen.findByText(/Список элементов с бесконечным скроллом/i);
  expect(headingElement).toBeInTheDocument();


  const itemListElement = screen.getByTestId('item-list');
  expect(itemListElement).toBeInTheDocument();
});
