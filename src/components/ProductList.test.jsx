import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductsList from './ProductsList';

const products = [
  { id: 1, title:'Backpack' },
  { id: 2, title:'Shoes' },
  { id: 3, title:'Notebook'},
]

describe('ProductsList component', () => {
  it('renders the products array', () => {
    render(<ProductsList products={products} />);

    const renderedProducts = screen.queryAllByRole('listitem');

    expect(renderedProducts.length).toBe(3);
    expect(renderedProducts[0].textContent).toMatch(/Backpack/i);
    expect(renderedProducts[0].textContent).toMatch(/Shoes/i);
    expect(renderedProducts[0].textContent).toMatch(/Notebook/i);
  })
});