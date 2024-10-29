import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the main heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Список элементов с бесконечным скроллом/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the ItemList component', () => {
    render(<App />);
    const itemListElement = screen.getByTestId('item-list'); 
    expect(itemListElement).toBeInTheDocument();
  });
});
